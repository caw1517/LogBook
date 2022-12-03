using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using backend.Models.NavData;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class LogBookService
    {
        private readonly DataContext _context;
        private readonly AirportsContext _airportsContext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public LogBookService(DataContext context, AirportsContext airportsContext, IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            _airportsContext = airportsContext;
            _context = context;
        }

        //Get all logbooks
        public IEnumerable<LogBookEntry> GetAll()
        {
            return _context.LogBookEntries.AsNoTracking().ToList();
        }

        //Get logbook by id

        public LogBookEntry GetById(int id)
        {
            return _context.LogBookEntries.AsNoTracking().FirstOrDefault(x => x.id == id);
        }
        
        //Get all logbooks made by user that requested them
        public IEnumerable<LogBookEntry> GetByUser()
        {
            string userId = GetIdByToken();
            
            //Convert userId to int
            int intId = Int32.Parse(userId);

            //Return that user's Logbook Entries
            return _context.LogBookEntries.AsNoTracking().Where(x => x.UserId == intId).ToList();
        }
        
        //Get all logbooks by aircraft id
        public IEnumerable<LogBookEntry> GetByAircraft(int id)
        {
            return _context.LogBookEntries.AsNoTracking().Where(x => x.AircraftId == id).ToList();
        }
        //Get Airport Info
        public Airport GetIcaoInfo(string ident)
        {
            //Make sure it is uppercase
            ident = ident.ToUpper();
            
            var returnAirport = (dynamic)null;
            //Look up the airport in the database - Large Airport First
            var smallAirport = _airportsContext.Airports.FirstOrDefault(a => a.Ident == ident);
            if (smallAirport is not null)
            { 
                returnAirport = smallAirport;
            } 
            else if(smallAirport is null)
            { 
                returnAirport = _airportsContext.AirportLarge.FirstOrDefault(a => a.Ident == ident);
            }
            else
            {
                returnAirport = _airportsContext.AirportMedium.FirstOrDefault(a => a.Ident == ident);
            }
            
            //Return
            return returnAirport;
        }
        
        //Create new logbook entry
        public LogBookEntry NewLogBookEntry(CreateLogbookDto request)
        {
            //Find the aircraft that the logbook entry is tied too.
            var aircraft = _context.Aircrafts.FirstOrDefault(a => a.Id == request.AircraftId);
            
            //Find the user that is creating the logbook entry
            var user = _context.Users.FirstOrDefault(u => u.Id == request.UserId);

            //Assign the data fields correctly
            var newLogBook = new LogBookEntry
            {
                RouteName = request.RouteName,
                RouteNotes = request.RouteNotes,
                RouteHours = request.RouteHours,
                RouteMinutes = request.RouteMinutes,
                NumberLandings = request.NumberLandings,
                DepartureAirport = request.DepartureAirport,
                ArrivalAirport = request.ArrivalAirport,
                DateFlown = request.DateFlown,
                Aircraft = aircraft,
                User = user
            };

            //Save changes to the database
            _context.LogBookEntries.Add(newLogBook);
            _context.SaveChanges();

            //Return
            return newLogBook;
        }

        //Update logbook entry
        public LogBookEntry UpdateLogBookEntry(int id, CreateLogbookDto request)
        {
            //Find the logbook entry to update
            var logBookEntry = _context.LogBookEntries.FirstOrDefault(l => l.id == id);
            
            if(logBookEntry is not null)
            {
                //Update the desired fields.
                logBookEntry.RouteName = request.RouteName;
                logBookEntry.RouteNotes = request.RouteNotes;
                logBookEntry.RouteHours = request.RouteHours;
                logBookEntry.RouteMinutes = request.RouteMinutes;
                logBookEntry.NumberLandings = request.NumberLandings;
                logBookEntry.DepartureAirport = request.DepartureAirport;
                logBookEntry.ArrivalAirport = request.ArrivalAirport;
                logBookEntry.DateFlown = request.DateFlown;
                
            }
            
            //Save the changes
            _context.SaveChanges();
            
            //Return the updated logbook entry
            return logBookEntry;
        }

        //Delete logbook entry
        public void DeleteLogBookEntry(int id)
        {
            var logBookEntry = _context.LogBookEntries.FirstOrDefault(l => l.id == id);
            _context.LogBookEntries.Remove(logBookEntry);
            _context.SaveChanges();
        }

        public string GetIdByToken()
        {
            var result = string.Empty;
            if (_httpContextAccessor.HttpContext != null)
            {
                result = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
            }

            return result;
        }
    }
}