using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AircraftController : ControllerBase
    {

        AircraftService _aircraftService;

        //Constructor
        public AircraftController(AircraftService aircraftService)
        {
            _aircraftService = aircraftService;
        }
        
        [Authorize]
        [HttpGet]
        public IEnumerable<Aircraft> GetAll()
        {
            return _aircraftService.GetAll();
        }

        //Get single aircraft
        [HttpGet("{id}")]
        public ActionResult<Aircraft> GetAircraftById(int id)
        {
            var aircraft = _aircraftService.GetAircraftById(id);
            if (aircraft is not null)
            {
                return aircraft;
            }
            else
            {
                return NotFound("Aircraft not found");
            }
        }

        //Add new aircraft
        [HttpPost]
        public IActionResult AddAircraft(Aircraft newAircraft)
        {
            var aircraft = _aircraftService.AddAircraft(newAircraft);
            return CreatedAtAction(nameof(GetAircraftById), new { id = aircraft.Id }, aircraft);
        }

        //Update aircraft
        [HttpPut("{id}")]
        public IActionResult UpdateAircraft(int id, Aircraft aircraft)
        {
           _aircraftService.UpdateAircraft(id, aircraft);
            return Ok("Updated Successfully");
        }

        //Delete aircraft
        [HttpDelete("{id}")]
        public IActionResult DeleteAircraft(int id)
        {
            var aircraft = _aircraftService.GetAircraftById(id);
            if (aircraft is not null)
            {
                _aircraftService.DeleteAircraft(id);
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}