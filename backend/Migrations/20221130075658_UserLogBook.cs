using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class UserLogBook : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LogBookEntries_Users_UserId",
                table: "LogBookEntries");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "LogBookEntries",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_LogBookEntries_Users_UserId",
                table: "LogBookEntries",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LogBookEntries_Users_UserId",
                table: "LogBookEntries");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "LogBookEntries",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_LogBookEntries_Users_UserId",
                table: "LogBookEntries",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
