using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class userController : ControllerBase
    {
                private readonly DataContext dc;
        public userController(DataContext dc){
            this.dc = dc;
        }
        //api/user/login
        [HttpPost("login")]
        public IActionResult login(userLogin userLogin)
        {
            var user = dc.Users.FirstOrDefault(item => item.password == userLogin.password && item.email == userLogin.email);
            if (user == null)
            {
                return Unauthorized();
            }
            var userResponseLogin = new userResponseLogin();
            userResponseLogin.email = userLogin.email;
            userResponseLogin.token = userResponseLogin.createToken(user);
            return Ok(userResponseLogin);

        }
        [HttpPost("register")]
            public async Task<IActionResult> register(User user ){
            await dc.Users.AddAsync(user);
            await dc.SaveChangesAsync();
            return Ok(user);

        }
    }
}