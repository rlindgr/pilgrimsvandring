using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace pilgrimsvandringen_grupp_5_e.Migrations
{
    /// <inheritdoc />
    public partial class PointCoordinates : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EndPointCoords",
                table: "Trails",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "StartPointCoords",
                table: "Trails",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndPointCoords",
                table: "Trails");

            migrationBuilder.DropColumn(
                name: "StartPointCoords",
                table: "Trails");
        }
    }
}
