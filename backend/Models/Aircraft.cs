using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Aircraft
    {
        public int Id { get; set; }
        public string SerialNumber { get; set; } = string.Empty;
        public string AircraftType { get; set; } = string.Empty;
        
        public int? UserId { get; set; }
    }
}