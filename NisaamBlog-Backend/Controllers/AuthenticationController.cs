using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using NisaamBlog_Backend.Interfaces;
using NisaamBlog_Backend.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace NisaamBlog_Backend.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IDatabase<User> _userDb;

        [HttpPost("authenticate")]
        public ActionResult<string> Authenticate(AuthenticatrionRequestBody userdto)
        {
            var user = ValidateUser(userdto);
            if (user == null)
            {
                return Unauthorized();
            }

            var securitykey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_configuration["Authentication:KeySecret"]));
            var signingCredentials = new SigningCredentials(securitykey, SecurityAlgorithms.HmacSha256);
            var claims = new List<Claim>();
            claims.Add(new Claim("sub", user.Id));
            claims.Add(new Claim("given_name", user.FirstName));
            claims.Add(new Claim("family_name", user.LastName));
            claims.Add(new Claim("city", user.City));

            var jwtToken = new JwtSecurityToken(
                _configuration["Authentication:Issuer"],
                _configuration["Authentication:Audience"],
                claims,
                DateTime.UtcNow,
                DateTime.UtcNow.AddHours(1),
                signingCredentials);

            var tokenToReturn = new JwtSecurityTokenHandler()
                .WriteToken(jwtToken);

            return Ok(tokenToReturn);
        }

        private User? ValidateUser(AuthenticatrionRequestBody user)
        {
            return _userDb.Get().Where(x =>
            {
                var firstCase = x.Email == user.Email && x.Password == user.Password;
                var secondCase = x.Username == user.Username && x.Password == user.Password;
                return firstCase || secondCase;
            }).FirstOrDefault();
        }

        public AuthenticationController(IConfiguration configuration, IDatabase<User> userDb)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
            _userDb = userDb ?? throw new ArgumentNullException(nameof(userDb));
        }
    }
}
