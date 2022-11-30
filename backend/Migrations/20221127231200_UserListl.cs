using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class UserListl : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "LogBookEntries",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_LogBookEntries_UserId",
                table: "LogBookEntries",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_LogBookEntries_Users_UserId",
                table: "LogBookEntries",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LogBookEntries_Users_UserId",
                table: "LogBookEntries");

            migrationBuilder.DropIndex(
                name: "IX_LogBookEntries_UserId",
                table: "LogBookEntries");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "LogBookEntries");
        }
    }
}
