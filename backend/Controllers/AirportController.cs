using Microsoft.AspNetCore.Mvc;
using backend.Models.NavData;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AirportController : ControllerBase
    {
        AirportService _airportService;

        //Constructor
        public AirportController(AirportService airportService)
        {
            _airportService = airportService;
        }

        //Get single airport by id for Airport Model
        [HttpGet("{id}")]
        public ActionResult<Airport> GetAirportById(int id)
        {
            var airport = _airportService.GetAirportById(id);
            if (airport is not null)
            {
                return airport;
            }
            else
            {
                return NotFound("Airport not found");
            }
        }

        //Get Large airport by id
        [HttpGet("large/{id}")]
        public ActionResult<AirportLarge> GetLargeAirportById(int id)
        {
            var airport = _airportService.GetLargeAirportById(id);
            if (airport is not null)
            {
                return airport;
            }
            else
            {
                return NotFound("Airport not found");
            }
        }

        //Get Medium airport by id
        [HttpGet("medium/{id}")]
        public ActionResult<AirportMedium> GetMediumAirportById(int id)
        {
            var airport = _airportService.GetMediumAirportById(id);
            if (airport is not null)
            {
                return airport;
            }
            else
            {
                return NotFound("Airport not found");
            }
        }

        //Get single airport by ident
        [HttpGet("ident/{ident}")]
        public ActionResult<Airport> GetAirportByIcao(string ident)
        {
            ident = ident.ToUpper();
            var airport = _airportService.GetAirportByIcao(ident);
            if (airport is not null)
            {
                return airport;
            }
            else
            {
                return NotFound("Airport not found");
            }
        }

        //Get Large airport by ident
        [HttpGet("large/ident/{ident}")]
        public ActionResult<AirportLarge> GetLargeAirportByIcao(string ident)
        {
            ident = ident.ToUpper();
            var airport = _airportService.GetLargeAirportByIcao(ident);
            if (airport is not null)
            {
                return airport;
            }
            else
            {
                return NotFound("Airport not found");
            }
        }

        //Get Medium airport by ident
        [HttpGet("medium/ident/{ident}")]
        public ActionResult<AirportMedium> GetMediumAirportByIcao(string ident)
        {
            ident = ident.ToUpper();
            var airport = _airportService.GetMediumAirportByIcao(ident);
            if (airport is not null)
            {
                return airport;
            }
            else
            {
                return NotFound("Airport not found");
            }
        }

    }
}