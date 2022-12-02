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

            //Else return Ok with the token
            return Ok(token);
        }
        
        //Logout User
        [HttpPost("logout")]
        public IActionResult LogoutUser()
        {
            //Logout the user
            _authService.LogoutUser();

            //Return Ok
            return Ok();
        }
        
    }
}