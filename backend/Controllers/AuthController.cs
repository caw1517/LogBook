using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        AuthService _authService;
        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        //Get All Users
        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            return _authService.GetAll();
        }
        
        //Register new user
        [HttpPost("register")]
        public IActionResult RegisterNewUser(UserDto newUser)
        {
            //Create new user
            var userToAdd = _authService.RegisterNewUser(newUser);
            
            //Return the new user
            return CreatedAtAction(nameof(GetAll), new { id = userToAdd.Id }, userToAdd);
        }

        //Login User
        [HttpPost("login")]
        public IActionResult LoginUser(LoginDto request)
        {
            //Get the user based off username or email
            var token = _authService.LoginUser(request);

           //If token is null, return unauthorized 
            if (token is null)
            {
                return Unauthorized("Bad login details. Please try again."); 
            }
            
            //If token starts with bad request, return error
            if (token.StartsWith("Bad"))
            {
                return BadRequest(token);
            }

            if (token.StartsWith("User not"))
            {
                return BadRequest(token);
            }

            //Else return Ok with the token
            return Ok(token);
        }

    }
}