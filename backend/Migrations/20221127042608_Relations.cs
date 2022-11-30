using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class Relations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LogBookEntries_Aircrafts_AircraftId",
                table: "LogBookEntries");

            migrationBuilder.AlterColumn<int>(
                name: "AircraftId",
                table: "LogBookEntries",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_LogBookEntries_Aircrafts_AircraftId",
                table: "LogBookEntries",
                column: "AircraftId",
                principalTable: "Aircrafts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LogBookEntries_Aircrafts_AircraftId",
                table: "LogBookEntries");

            migrationBuilder.AlterColumn<int>(
                name: "AircraftId",
                table: "LogBookEntries",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_LogBookEntries_Aircrafts_AircraftId",
                table: "LogBookEntries",
                column: "AircraftId",
                principalTable: "Aircrafts",
                principalColumn: "Id");
        }
    }
}
