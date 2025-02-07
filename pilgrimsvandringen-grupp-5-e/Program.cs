using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Abstractions;
using pilgrimsvandringen_grupp_5_e.Data;
using pilgrimsvandringen_grupp_5_e.Repositories;
using pilgrimsvandringen_grupp_5_e.Repositories.Interfaces;
using pilgrimsvandringen_grupp_5_e.Services;
using pilgrimsvandringen_grupp_5_e.Services.Interfaces;
using System;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<ITrailInformationService, TrailInformationService>();
builder.Services.AddScoped<ITrailRepository, TrailRepository>();
builder.Services.AddScoped<IPointOfinterestService, PointOfInterestService>();
builder.Services.AddScoped<IPointOfInterestRepository, PointOfInterestRepository>();
builder.Services.AddScoped<IStageInformationService, StageInformationService>();
builder.Services.AddScoped<IStageRepository, StageRepository>();

var config = new ConfigurationBuilder()
.AddUserSecrets<Program>()
.Build();

builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseNpgsql(config.GetConnectionString("LocalConnection")),
                ServiceLifetime.Scoped
                );


var app = builder.Build();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthorization();

app.MapStaticAssets();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}")
    .WithStaticAssets();


app.Run();
