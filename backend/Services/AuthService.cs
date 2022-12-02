using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.IdentityModel.Tokens;

namespace backend.Services
{
    public class AuthService
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IDistributedCache _cache;

        public AuthService(IDistributedCache cache, DataContext context, IConfiguration configuration, IHttpContextAccessor contextAccessor)
        {
            _cache = cache;
            _context = context;
            _configuration = configuration;
            _httpContextAccessor = contextAccessor;
        }
        
        //Get all users
        public IEnumerable<User> GetAll()
        {
            return _context.Users.AsNoTracking().ToList();
        }

        //Register new user
        public User RegisterNewUser(UserDto request)
        {
            //Create password hash and salt
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            //Create new user and set data fields
            var newUser = new User
            {
                UserName = request.UserName,
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            //Add new user to database and save changes
            _context.Users.Add(newUser);
            _context.SaveChanges();
            
            //Return the new user
            return newUser;
        }

        //Login User
        public string LoginUser(LoginDto request)
        {
            //Get the user based off username or email
            var user = _context.Users.FirstOrDefault(u => u.UserName == request.UserName || u.Email == request.UserName);

            //If user is null, return error
            if (user is null)
            {
                return ("User not found.");
            }
            //Verify hash and if they don't match, return error
            if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
            {
                return "Bad request: Incorrect password";
            }

            string returnToken = CreateToken(user);
            //Return JWT    
            return returnToken;
        }
        
        //Logout User
        public async Task LogoutUser()
        {
            //Remove token from cache
            await _cache.RemoveAsync(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
        }

        //Create Password Hash - password from UserRegisterDTO and converted to hash and salt
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            //Hash and set passwordSalt and Hash
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        //Verify Password Hash - password from UserLoginDTO and converted to hash and salt then verified
        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }

        //Create Token
        private string CreateToken(User user)
        {
            //Create claims
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName)
            };

            //Create key
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials
            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
}