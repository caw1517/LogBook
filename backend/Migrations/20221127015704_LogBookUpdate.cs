using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class LogBookUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LogBookEntries",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RouteName = table.Column<string>(type: "TEXT", nullable: false),
                    RouteNotes = table.Column<string>(type: "TEXT", nullable: false),
                    RouteHours = table.Column<int>(type: "INTEGER", nullable: false),
                    RouteMinutes = table.Column<int>(type: "INTEGER", nullable: false),
                    NumberLandings = table.Column<int>(type: "INTEGER", nullable: true),
                    DepartureAirport = table.Column<string>(type: "TEXT", nullable: false),
                    ArrivalAirport = table.Column<string>(type: "TEXT", nullable: false),
                    DateFlown = table.Column<DateTime>(type: "TEXT", nullable: false),
                    AircraftId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LogBookEntries", x => x.id);
                    table.ForeignKey(
                        name: "FK_LogBookEntries_Aircrafts_AircraftId",
                        column: x => x.AircraftId,
                        principalTable: "Aircrafts",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_LogBookEntries_AircraftId",
                table: "LogBookEntries",
                column: "AircraftId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LogBookEntries");
        }
    }
}
