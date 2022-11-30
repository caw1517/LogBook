using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using backend.Models.NavData;

namespace backend.Data;

public partial class AirportsContext : DbContext
{
    public AirportsContext()
    {
    }

    public AirportsContext(DbContextOptions<AirportsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Airport> Airports { get; set; }

    public virtual DbSet<AirportLarge> AirportLarge { get; set; }

    public virtual DbSet<AirportMedium>AirportMedium { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlite("Data Source=.\\Airports.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Airport>(entity =>
        {
            entity.ToTable("airport");

            entity.Property(e => e.AirportId)
                .ValueGeneratedNever()
                .HasColumnName("airport_id");
            entity.Property(e => e.Altitude).HasColumnName("altitude");
            entity.Property(e => e.AsosFrequency).HasColumnName("asos_frequency");
            entity.Property(e => e.AtisFrequency).HasColumnName("atis_frequency");
            entity.Property(e => e.AwosFrequency).HasColumnName("awos_frequency");
            entity.Property(e => e.BglFilename)
                .HasColumnType("varchar(300)")
                .HasColumnName("bgl_filename");
            entity.Property(e => e.BottomLaty)
                .HasColumnType("double")
                .HasColumnName("bottom_laty");
            entity.Property(e => e.City)
                .HasColumnType("varchar(50)")
                .HasColumnName("city");
            entity.Property(e => e.Country)
                .HasColumnType("varchar(50)")
                .HasColumnName("country");
            entity.Property(e => e.Faa)
                .HasColumnType("varchar(10)")
                .HasColumnName("faa");
            entity.Property(e => e.FileId).HasColumnName("file_id");
            entity.Property(e => e.Flatten).HasColumnName("flatten");
            entity.Property(e => e.FuelFlags).HasColumnName("fuel_flags");
            entity.Property(e => e.HasAvgas).HasColumnName("has_avgas");
            entity.Property(e => e.HasJetfuel).HasColumnName("has_jetfuel");
            entity.Property(e => e.HasTowerObject).HasColumnName("has_tower_object");
            entity.Property(e => e.Iata)
                .HasColumnType("varchar(10)")
                .HasColumnName("iata");
            entity.Property(e => e.Icao)
                .HasColumnType("varchar(10)")
                .HasColumnName("icao");
            entity.Property(e => e.Ident)
                .HasColumnType("varchar(10)")
                .HasColumnName("ident");
            entity.Property(e => e.Is3d).HasColumnName("is_3d");
            entity.Property(e => e.IsAddon).HasColumnName("is_addon");
            entity.Property(e => e.IsClosed).HasColumnName("is_closed");
            entity.Property(e => e.IsMilitary).HasColumnName("is_military");
            entity.Property(e => e.LargestParkingGate)
                .HasColumnType("varchar(20)")
                .HasColumnName("largest_parking_gate");
            entity.Property(e => e.LargestParkingRamp)
                .HasColumnType("varchar(20)")
                .HasColumnName("largest_parking_ramp");
            entity.Property(e => e.Laty)
                .HasColumnType("double")
                .HasColumnName("laty");
            entity.Property(e => e.LeftLonx)
                .HasColumnType("double")
                .HasColumnName("left_lonx");
            entity.Property(e => e.Local)
                .HasColumnType("varchar(10)")
                .HasColumnName("local");
            entity.Property(e => e.LongestRunwayHeading)
                .HasColumnType("double")
                .HasColumnName("longest_runway_heading");
            entity.Property(e => e.LongestRunwayLength).HasColumnName("longest_runway_length");
            entity.Property(e => e.LongestRunwaySurface)
                .HasColumnType("varchar(15)")
                .HasColumnName("longest_runway_surface");
            entity.Property(e => e.LongestRunwayWidth).HasColumnName("longest_runway_width");
            entity.Property(e => e.Lonx)
                .HasColumnType("double")
                .HasColumnName("lonx");
            entity.Property(e => e.MagVar)
                .HasColumnType("double")
                .HasColumnName("mag_var");
            entity.Property(e => e.Name)
                .HasColumnType("varchar(50)")
                .HasColumnName("name");
            entity.Property(e => e.NumApproach).HasColumnName("num_approach");
            entity.Property(e => e.NumApron).HasColumnName("num_apron");
            entity.Property(e => e.NumCom).HasColumnName("num_com");
            entity.Property(e => e.NumHelipad).HasColumnName("num_helipad");
            entity.Property(e => e.NumJetway).HasColumnName("num_jetway");
            entity.Property(e => e.NumParkingCargo).HasColumnName("num_parking_cargo");
            entity.Property(e => e.NumParkingGaRamp).HasColumnName("num_parking_ga_ramp");
            entity.Property(e => e.NumParkingGate).HasColumnName("num_parking_gate");
            entity.Property(e => e.NumParkingMilCargo).HasColumnName("num_parking_mil_cargo");
            entity.Property(e => e.NumParkingMilCombat).HasColumnName("num_parking_mil_combat");
            entity.Property(e => e.NumRunwayEndAls).HasColumnName("num_runway_end_als");
            entity.Property(e => e.NumRunwayEndClosed).HasColumnName("num_runway_end_closed");
            entity.Property(e => e.NumRunwayEndIls).HasColumnName("num_runway_end_ils");
            entity.Property(e => e.NumRunwayEndVasi).HasColumnName("num_runway_end_vasi");
            entity.Property(e => e.NumRunwayHard).HasColumnName("num_runway_hard");
            entity.Property(e => e.NumRunwayLight).HasColumnName("num_runway_light");
            entity.Property(e => e.NumRunwaySoft).HasColumnName("num_runway_soft");
            entity.Property(e => e.NumRunwayWater).HasColumnName("num_runway_water");
            entity.Property(e => e.NumRunways).HasColumnName("num_runways");
            entity.Property(e => e.NumStarts).HasColumnName("num_starts");
            entity.Property(e => e.NumTaxiPath).HasColumnName("num_taxi_path");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.Region)
                .HasColumnType("varchar(4)")
                .HasColumnName("region");
            entity.Property(e => e.RightLonx)
                .HasColumnType("double")
                .HasColumnName("right_lonx");
            entity.Property(e => e.SceneryLocalPath)
                .HasColumnType("varchar(250)")
                .HasColumnName("scenery_local_path");
            entity.Property(e => e.State)
                .HasColumnType("varchar(50)")
                .HasColumnName("state");
            entity.Property(e => e.TopLaty)
                .HasColumnType("double")
                .HasColumnName("top_laty");
            entity.Property(e => e.TowerAltitude).HasColumnName("tower_altitude");
            entity.Property(e => e.TowerFrequency).HasColumnName("tower_frequency");
            entity.Property(e => e.TowerLaty)
                .HasColumnType("double")
                .HasColumnName("tower_laty");
            entity.Property(e => e.TowerLonx)
                .HasColumnType("double")
                .HasColumnName("tower_lonx");
            entity.Property(e => e.TransitionAltitude)
                .HasColumnType("double")
                .HasColumnName("transition_altitude");
            entity.Property(e => e.TransitionLevel)
                .HasColumnType("double")
                .HasColumnName("transition_level");
            entity.Property(e => e.Type).HasColumnName("type");
            entity.Property(e => e.UnicomFrequency).HasColumnName("unicom_frequency");
        });

        modelBuilder.Entity<AirportLarge>(entity =>
        {
            entity.HasKey(e => e.AirportId);

            entity.ToTable("airport_large");

            entity.Property(e => e.AirportId)
                .ValueGeneratedNever()
                .HasColumnName("airport_id");
            entity.Property(e => e.BottomLaty)
                .HasColumnType("double")
                .HasColumnName("bottom_laty");
            entity.Property(e => e.Faa)
                .HasColumnType("varchar(10)")
                .HasColumnName("faa");
            entity.Property(e => e.HasAvgas).HasColumnName("has_avgas");
            entity.Property(e => e.HasJetfuel).HasColumnName("has_jetfuel");
            entity.Property(e => e.Iata)
                .HasColumnType("varchar(10)")
                .HasColumnName("iata");
            entity.Property(e => e.Icao)
                .HasColumnType("varchar(10)")
                .HasColumnName("icao");
            entity.Property(e => e.Ident)
                .HasColumnType("varchar(10)")
                .HasColumnName("ident");
            entity.Property(e => e.Is3d).HasColumnName("is_3d");
            entity.Property(e => e.IsAddon).HasColumnName("is_addon");
            entity.Property(e => e.IsClosed).HasColumnName("is_closed");
            entity.Property(e => e.IsMilitary).HasColumnName("is_military");
            entity.Property(e => e.Laty)
                .HasColumnType("double")
                .HasColumnName("laty");
            entity.Property(e => e.LeftLonx)
                .HasColumnType("double")
                .HasColumnName("left_lonx");
            entity.Property(e => e.Local)
                .HasColumnType("varchar(10)")
                .HasColumnName("local");
            entity.Property(e => e.LongestRunwayHeading)
                .HasColumnType("double")
                .HasColumnName("longest_runway_heading");
            entity.Property(e => e.LongestRunwayLength).HasColumnName("longest_runway_length");
            entity.Property(e => e.Lonx)
                .HasColumnType("double")
                .HasColumnName("lonx");
            entity.Property(e => e.MagVar)
                .HasColumnType("double")
                .HasColumnName("mag_var");
            entity.Property(e => e.Name)
                .HasColumnType("varchar(50)")
                .HasColumnName("name");
            entity.Property(e => e.NumHelipad).HasColumnName("num_helipad");
            entity.Property(e => e.NumRunwayHard).HasColumnName("num_runway_hard");
            entity.Property(e => e.NumRunwaySoft).HasColumnName("num_runway_soft");
            entity.Property(e => e.NumRunwayWater).HasColumnName("num_runway_water");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.RightLonx)
                .HasColumnType("double")
                .HasColumnName("right_lonx");
            entity.Property(e => e.TopLaty)
                .HasColumnType("double")
                .HasColumnName("top_laty");
            entity.Property(e => e.TowerFrequency).HasColumnName("tower_frequency");
        });

        modelBuilder.Entity<AirportMedium>(entity =>
        {
            entity.HasKey(e => e.AirportId);

            entity.ToTable("airport_medium");

            entity.Property(e => e.AirportId)
                .ValueGeneratedNever()
                .HasColumnName("airport_id");
            entity.Property(e => e.BottomLaty)
                .HasColumnType("double")
                .HasColumnName("bottom_laty");
            entity.Property(e => e.Faa)
                .HasColumnType("varchar(10)")
                .HasColumnName("faa");
            entity.Property(e => e.HasAvgas).HasColumnName("has_avgas");
            entity.Property(e => e.HasJetfuel).HasColumnName("has_jetfuel");
            entity.Property(e => e.Iata)
                .HasColumnType("varchar(10)")
                .HasColumnName("iata");
            entity.Property(e => e.Icao)
                .HasColumnType("varchar(10)")
                .HasColumnName("icao");
            entity.Property(e => e.Ident)
                .HasColumnType("varchar(10)")
                .HasColumnName("ident");
            entity.Property(e => e.Is3d).HasColumnName("is_3d");
            entity.Property(e => e.IsAddon).HasColumnName("is_addon");
            entity.Property(e => e.IsClosed).HasColumnName("is_closed");
            entity.Property(e => e.IsMilitary).HasColumnName("is_military");
            entity.Property(e => e.Laty)
                .HasColumnType("double")
                .HasColumnName("laty");
            entity.Property(e => e.LeftLonx)
                .HasColumnType("double")
                .HasColumnName("left_lonx");
            entity.Property(e => e.Local)
                .HasColumnType("varchar(10)")
                .HasColumnName("local");
            entity.Property(e => e.LongestRunwayHeading)
                .HasColumnType("double")
                .HasColumnName("longest_runway_heading");
            entity.Property(e => e.LongestRunwayLength).HasColumnName("longest_runway_length");
            entity.Property(e => e.Lonx)
                .HasColumnType("double")
                .HasColumnName("lonx");
            entity.Property(e => e.MagVar)
                .HasColumnType("double")
                .HasColumnName("mag_var");
            entity.Property(e => e.Name)
                .HasColumnType("varchar(50)")
                .HasColumnName("name");
            entity.Property(e => e.NumHelipad).HasColumnName("num_helipad");
            entity.Property(e => e.NumRunwayHard).HasColumnName("num_runway_hard");
            entity.Property(e => e.NumRunwaySoft).HasColumnName("num_runway_soft");
            entity.Property(e => e.NumRunwayWater).HasColumnName("num_runway_water");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.RightLonx)
                .HasColumnType("double")
                .HasColumnName("right_lonx");
            entity.Property(e => e.TopLaty)
                .HasColumnType("double")
                .HasColumnName("top_laty");
            entity.Property(e => e.TowerFrequency).HasColumnName("tower_frequency");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
