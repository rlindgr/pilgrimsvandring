using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace pilgrimsvandringen_grupp_5_e.Migrations
{
    /// <inheritdoc />
    public partial class poitrailconnection : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TrailId",
                table: "PointsOfInterests",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_PointsOfInterests_TrailId",
                table: "PointsOfInterests",
                column: "TrailId");

            migrationBuilder.AddForeignKey(
                name: "FK_PointsOfInterests_Trails_TrailId",
                table: "PointsOfInterests",
                column: "TrailId",
                principalTable: "Trails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PointsOfInterests_Trails_TrailId",
                table: "PointsOfInterests");

            migrationBuilder.DropIndex(
                name: "IX_PointsOfInterests_TrailId",
                table: "PointsOfInterests");

            migrationBuilder.DropColumn(
                name: "TrailId",
                table: "PointsOfInterests");
        }
    }
}
