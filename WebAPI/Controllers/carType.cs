using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class carType : ControllerBase
    {
         [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[]{"toyota","ford","mercedes","sport car","family car"};
        }


    }
}