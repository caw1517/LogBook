using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class UserUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Aircrafts",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Aircrafts_UserId",
                table: "Aircrafts",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Aircrafts_Users_UserId",
                table: "Aircrafts",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Aircrafts_Users_UserId",
                table: "Aircrafts");

            migrationBuilder.DropIndex(
                name: "IX_Aircrafts_UserId",
                table: "Aircrafts");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Aircrafts");
        }
    }
}
