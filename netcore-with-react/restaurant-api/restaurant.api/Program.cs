using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using restaurant.api.models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(gen =>
{
    gen.SwaggerDoc("v1", new OpenApiInfo { Title = "Your API Name", Version = "v1" });
});
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<RestaurantDbContext>(
    opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("SqlConnectionString")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Run();
