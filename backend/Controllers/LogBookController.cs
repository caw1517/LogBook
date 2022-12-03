using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models.NavData;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LogBookController : ControllerBase
    {
        LogBookService _logBookService;
        public LogBookController(LogBookService logBookService)
        {
            _logBookService = logBookService;
        }

        [HttpGet]
        public IEnumerable<LogBookEntry> GetAll()
        {
            return _logBookService.GetAll();
        }

        [HttpGet("{id}")]
        public LogBookEntry GetById(int id)
        {
            return _logBookService.GetById(id);
        }
        
        [HttpGet("IcaoData/{icao}")]
        public Airport GetIcaoData(string icao)
        {
            return _logBookService.GetIcaoInfo(icao);
        }
        
        //Get all logbooks by aircraft id
        [HttpGet("AircraftRoutes/{id}")]
        public IEnumerable<LogBookEntry> GetByAircraftId(int id)
        {
            return _logBookService.GetByAircraft(id);
        }
        
        //Get by id of user
        [Authorize]
        [HttpGet("routes/byUser")]
        public IEnumerable<LogBookEntry> GetByUserId()
        {
            return _logBookService.GetByUser();
        }

        [HttpPut("{id}")]
        public LogBookEntry UpdateLogBookEntry(int id, CreateLogbookDto request)
        {
            return _logBookService.UpdateLogBookEntry(id, request);
        }

        [HttpPost]
        public IActionResult NewLogBookEntry(CreateLogbookDto request)
        {
            
            var logBookEntry = _logBookService.NewLogBookEntry(request);
            return CreatedAtAction(nameof(GetAll), new { id = logBookEntry.id }, logBookEntry);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteLogBookEntry(int id)
        {
            _logBookService.DeleteLogBookEntry(id);
            return NoContent();
        }
    }
}