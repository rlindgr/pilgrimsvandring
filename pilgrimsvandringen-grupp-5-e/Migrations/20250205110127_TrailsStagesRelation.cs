using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace pilgrimsvandringen_grupp_5_e.Migrations
{
    /// <inheritdoc />
    public partial class TrailsStagesRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TrailId",
                table: "Stages",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Stages_TrailId",
                table: "Stages",
                column: "TrailId");

            migrationBuilder.AddForeignKey(
                name: "FK_Stages_Trails_TrailId",
                table: "Stages",
                column: "TrailId",
                principalTable: "Trails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Stages_Trails_TrailId",
                table: "Stages");

            migrationBuilder.DropIndex(
                name: "IX_Stages_TrailId",
                table: "Stages");

            migrationBuilder.DropColumn(
                name: "TrailId",
                table: "Stages");
        }
    }
}
