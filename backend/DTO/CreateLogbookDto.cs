using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DTO
{
    public class CreateLogbookDto
    {
        public int id { get; set; }
        public string RouteName { get; set; } = string.Empty;
        public string? RouteNotes { get; set; }
        public int RouteHours { get; set; }
        public int RouteMinutes { get; set; }
        public int? NumberLandings { get; set; }
        public string DepartureAirport { get; set; } = string.Empty;
        public string ArrivalAirport { get; set; } = string.Empty;
        public DateTime DateFlown { get; set; }
        public int AircraftId { get; set; }
        public int UserId { get; set; }
    }
}