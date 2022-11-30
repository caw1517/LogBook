using backend.Models.NavData;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class AirportService
    {
        private readonly AirportsContext _context;

        public AirportService(AirportsContext context)
        {
            _context = context;
        }

        //Get Single Airport
        public Airport? GetAirportById(int id)
        {
            return _context.Airports
                .AsNoTracking()
                .SingleOrDefault(x => x.AirportId == id);
        }

        //Get Large Single Airport
        public AirportLarge? GetLargeAirportById(int id)
        {
            return _context.AirportLarge
                .AsNoTracking()
                .SingleOrDefault(x => x.AirportId == id);
        }

        //Get Medium Single Airport
        public AirportMedium? GetMediumAirportById(int id)
        {
            return _context.AirportMedium
                .AsNoTracking()
                .SingleOrDefault(x => x.AirportId == id);
        }

        //Get Airport by ident
        public Airport? GetAirportByIcao(string ident)
        {
            return _context.Airports
                .AsNoTracking()
                .SingleOrDefault(x => x.Ident == ident);
        }

        //Get Large Airport by ident
        public AirportLarge? GetLargeAirportByIcao(string ident)
        {
            return _context.AirportLarge
                .AsNoTracking()
                .SingleOrDefault(x => x.Ident == ident);
        }

        //Get Medium Airport by ident
        public AirportMedium? GetMediumAirportByIcao(string ident)
        {
            return _context.AirportMedium
                .AsNoTracking()
                .SingleOrDefault(x => x.Ident == ident);
        }

    }
}