using System;
using System.Collections.Generic;

namespace backend.Models.NavData;

public partial class AirportLarge
{
    public long AirportId { get; set; }

    public string Ident { get; set; } = null!;

    public string? Icao { get; set; }

    public string? Iata { get; set; }

    public string? Faa { get; set; }

    public string? Local { get; set; }

    public string? Name { get; set; }

    public long HasAvgas { get; set; }

    public long HasJetfuel { get; set; }

    public long? TowerFrequency { get; set; }

    public long IsClosed { get; set; }

    public long IsMilitary { get; set; }

    public long IsAddon { get; set; }

    public long Is3d { get; set; }

    public long NumRunwayHard { get; set; }

    public long NumRunwaySoft { get; set; }

    public long NumRunwayWater { get; set; }

    public long NumHelipad { get; set; }

    public long LongestRunwayLength { get; set; }

    public double LongestRunwayHeading { get; set; }

    public long Rating { get; set; }

    public double LeftLonx { get; set; }

    public double TopLaty { get; set; }

    public double RightLonx { get; set; }

    public double BottomLaty { get; set; }

    public double MagVar { get; set; }

    public double Lonx { get; set; }

    public double Laty { get; set; }
}
