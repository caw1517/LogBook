using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class AircraftChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FuelBurn",
                table: "Aircrafts");

            migrationBuilder.DropColumn(
                name: "FuelCapacity",
                table: "Aircrafts");

            migrationBuilder.DropColumn(
                name: "MaxAltitude",
                table: "Aircrafts");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FuelBurn",
                table: "Aircrafts",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FuelCapacity",
                table: "Aircrafts",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MaxAltitude",
                table: "Aircrafts",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
