using System.Security.Cryptography.X509Certificates;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class AircraftService
    {
        private readonly DataContext _context;

        public AircraftService(DataContext context)
        {
            _context = context;
        }

        //Get all
        public IEnumerable<Aircraft> GetAll()
        {
            return _context.Aircrafts.AsNoTracking().ToList();
        }
        
        //Get aircraft by userId
        public IEnumerable<Aircraft> GetByUserId(int userId)
        {
            return _context.Aircrafts.AsNoTracking().Where(x => x.UserId == userId).ToList();
        }

        //Get single by id
        public Aircraft? GetAircraftById(int id)
        {
            return _context.Aircrafts
                .AsNoTracking()
                .SingleOrDefault(x => x.Id == id);
        }

        //Add new aircraft
        public Aircraft AddAircraft(Aircraft newAircraft)
        {
            
            _context.Aircrafts.Add(newAircraft);
            _context.SaveChanges();

            return newAircraft;
        }

        //Delete aircraft by id
        public void DeleteAircraft(int id)
        {
            var aircraft = _context.Aircrafts.Find(id);
            if (aircraft is not null)
            {
                _context.Aircrafts.Remove(aircraft);
                _context.SaveChanges();
            }
        }

        //Update aircraft by id
        public void UpdateAircraft(int id, Aircraft aircraft)
        {
            var aircraftToUpdate = _context.Aircrafts.Find(id);

            if (aircraftToUpdate is not null)
            {
                aircraftToUpdate.SerialNumber = aircraft.SerialNumber;
                aircraftToUpdate.AircraftType = aircraft.AircraftType;
            }

            _context.SaveChanges();
        }
    }
}