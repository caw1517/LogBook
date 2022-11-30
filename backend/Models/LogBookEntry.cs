using System.Text.Json.Serialization;

namespace backend.Models
{
    public class LogBookEntry
    {
        public int id { get; set; }
        public string RouteName { get; set; } = string.Empty;
        public string RouteNotes { get; set; } = string.Empty;
        public int RouteHours { get; set; }
        public int RouteMinutes { get; set; }
        public int? NumberLandings { get; set; }
        public string DepartureAirport { get; set; } = string.Empty;
        public string ArrivalAirport { get; set; } = string.Empty;
        public DateTime DateFlown { get; set; }
        public int AircraftId { get; set; }
        public int UserId { get; set; }
        [JsonIgnore]
        public Aircraft? Aircraft { get; set; }
        [JsonIgnore]
        public User? User { get; set; }
    }
}