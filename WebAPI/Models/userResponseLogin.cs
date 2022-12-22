using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data;
using WebAPI.Models;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace WebAPI.Models
{
    public class userResponseLogin
    {
        public userResponseLogin()
        {
        }

        public string email { get; set; }
        public string token { get; set; }
         public string createJWT(User user)
        {

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is the key for app"));
            var claims = new Claim[]{
            new Claim(ClaimTypes.Name,user.email),
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
           };
            var signingCredentials = new SigningCredentials(key,SecurityAlgorithms.HmacSha256Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(10),
                SigningCredentials = signingCredentials
        };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
   
   public string createToken(User user){
      //starting token generation...
            var tokenHandler = new JwtSecurityTokenHandler();
            var seckey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("A_VERY_SECRET_SECURITY_KEY_FOR_JWT_AUTH"));
            var signingCreds = new SigningCredentials(seckey, SecurityAlgorithms.HmacSha256Signature);
            var token = tokenHandler.CreateToken(new SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(new Claim[] { new Claim(ClaimTypes.Name, user.Id.ToString()) }),
                SigningCredentials = signingCreds,
                Expires = DateTime.UtcNow.AddDays(7),
            });
            return tokenHandler.WriteToken(token);
   }
    }
}