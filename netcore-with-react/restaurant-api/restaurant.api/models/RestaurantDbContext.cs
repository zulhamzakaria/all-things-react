using Microsoft.EntityFrameworkCore;

namespace restaurant.api.models;

public class RestaurantDbContext : DbContext
{
    public RestaurantDbContext(DbContextOptions<RestaurantDbContext> options) : base(options)
    {
        
    }
    public DbSet<Customer> Customers { get; set; }
    public DbSet<OrderMaster> OrderMasters { get; set; }
    public DbSet<OrderDetails> OrderDetails { get; set; }
    public DbSet<FoodItem> FoodItems { get; set; }
}

