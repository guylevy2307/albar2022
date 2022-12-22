using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class carController : ControllerBase
    {
        private readonly DataContext dc;
        public carController(DataContext dc){
            this.dc = dc;
        }
        //GET api/car
            [HttpGet]
            public async Task<IActionResult> getCars(){
            var cars = await dc.Cars.ToListAsync();
            return Ok(cars);
            }
           
            //POST api/car
        [HttpPost]
            public async Task<IActionResult> AddCar(Car car ){
            Console.WriteLine("added car!");
            car.imageUrl = "assets/images/albarLogo.png";
            await dc.AddAsync(car);
            await dc.SaveChangesAsync();
            return Ok(car);

        }
       
    }
}