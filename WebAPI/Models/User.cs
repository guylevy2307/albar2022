using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace WebAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string userName { get; set; }
         [Required]
        public string password { get; set; }
         [Required]
        public string email { get; set; }

        public User( string userName, string password, string email)
        {
          
            this.userName = userName;
            this.password = password;
            this.email = email;
        }
       
    }
}