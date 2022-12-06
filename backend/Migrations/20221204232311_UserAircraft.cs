using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class UserAircraft : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Aircrafts_Users_UserId",
                table: "Aircrafts");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Aircrafts",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Aircrafts_Users_UserId",
                table: "Aircrafts",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Aircrafts_Users_UserId",
                table: "Aircrafts");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Aircrafts",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_Aircrafts_Users_UserId",
                table: "Aircrafts",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
