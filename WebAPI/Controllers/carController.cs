
using Microsoft.AspNetCore.JsonPatch;
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
        [HttpGet("/api/[controller]/{id}")]
        public async Task<IActionResult> getPrice(int id){
            var car = await dc.Cars.FindAsync(id);
            if (car == null)
            {
                return null;
            }
             return Ok(car.price);
            }
             [HttpPatch("/api/[controller]/{id}")]
        public async Task<IActionResult> updatePrice(int id,[FromBody] JsonPatchDocument<Car> patchDoc){
            var car = await dc.Cars.FindAsync(id);
            if (car == null)
            {
                return null;
            }
            if (patchDoc != null)
            {
                patchDoc.ApplyTo(car,ModelState);
                 await dc.SaveChangesAsync();  
            }
           
            return Ok(car.price);
            }
    }
}