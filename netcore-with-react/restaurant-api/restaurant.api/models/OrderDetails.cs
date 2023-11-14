using System.ComponentModel.DataAnnotations;

namespace restaurant.api.models;

public class OrderDetails
{
    [Key]
    public long OrderDetailsId { get; set; }
    public long OrderMasterId { get; set; }
    public int FoodItemId { get; set; }
    public decimal FoodItemPrice { get; set; }
    public int Quantity { get; set; }
}
