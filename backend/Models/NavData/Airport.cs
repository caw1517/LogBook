using System;
using System.Collections.Generic;

namespace backend.Models.NavData;

public partial class Airport
{
    public long AirportId { get; set; }

    public long FileId { get; set; }

    public string Ident { get; set; } = null!;

    public string? Icao { get; set; }

    public string? Iata { get; set; }

    public string? Faa { get; set; }

    public string? Local { get; set; }

    public string? Name { get; set; }

    public string? City { get; set; }

    public string? State { get; set; }

    public string? Country { get; set; }

    public string? Region { get; set; }

    public long? Flatten { get; set; }

    public long? Type { get; set; }

    public long FuelFlags { get; set; }

    public long HasAvgas { get; set; }

    public long HasJetfuel { get; set; }

    public long HasTowerObject { get; set; }

    public long? TowerFrequency { get; set; }

    public long? AtisFrequency { get; set; }

    public long? AwosFrequency { get; set; }

    public long? AsosFrequency { get; set; }

    public long? UnicomFrequency { get; set; }

    public long IsClosed { get; set; }

    public long IsMilitary { get; set; }

    public long IsAddon { get; set; }

    public long NumCom { get; set; }

    public long NumParkingGate { get; set; }

    public long NumParkingGaRamp { get; set; }

    public long NumParkingCargo { get; set; }

    public long NumParkingMilCargo { get; set; }

    public long NumParkingMilCombat { get; set; }

    public long NumApproach { get; set; }

    public long NumRunwayHard { get; set; }

    public long NumRunwaySoft { get; set; }

    public long NumRunwayWater { get; set; }

    public long NumRunwayLight { get; set; }

    public long NumRunwayEndClosed { get; set; }

    public long NumRunwayEndVasi { get; set; }

    public long NumRunwayEndAls { get; set; }

    public long? NumRunwayEndIls { get; set; }

    public long NumApron { get; set; }

    public long NumTaxiPath { get; set; }

    public long NumHelipad { get; set; }

    public long NumJetway { get; set; }

    public long NumStarts { get; set; }

    public long LongestRunwayLength { get; set; }

    public long LongestRunwayWidth { get; set; }

    public double LongestRunwayHeading { get; set; }

    public string? LongestRunwaySurface { get; set; }

    public long NumRunways { get; set; }

    public string? LargestParkingRamp { get; set; }

    public string? LargestParkingGate { get; set; }

    public long Rating { get; set; }

    public long Is3d { get; set; }

    public string? SceneryLocalPath { get; set; }

    public string? BglFilename { get; set; }

    public double LeftLonx { get; set; }

    public double TopLaty { get; set; }

    public double RightLonx { get; set; }

    public double BottomLaty { get; set; }

    public double MagVar { get; set; }

    public long? TowerAltitude { get; set; }

    public double? TowerLonx { get; set; }

    public double? TowerLaty { get; set; }

    public double? TransitionAltitude { get; set; }

    public double? TransitionLevel { get; set; }

    public long Altitude { get; set; }

    public double Lonx { get; set; }

    public double Laty { get; set; }
}
