using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Aircraft
    {

        public Aircraft()
        {
            LogBookEntries = new List<LogBookEntry>();
        }
        
        public int Id { get; set; }
        public string SerialNumber { get; set; } = string.Empty;
        public string AircraftType { get; set; } = string.Empty;
        public int FuelCapacity { get; set; }
        public int FuelBurn { get; set; }
        public int MaxAltitude { get; set; }
        public List<LogBookEntry>? LogBookEntries { get; set; }
    }
}