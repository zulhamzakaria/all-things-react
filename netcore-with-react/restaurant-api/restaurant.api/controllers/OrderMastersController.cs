using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using restaurant.api.models;

namespace restaurant.api.controllers;

public class OrderMastersController : Controller
{
    private readonly RestaurantDbContext _context;

    public OrderMastersController(RestaurantDbContext context)
    {
        _context = context;
    }

    // GET: OrderMasters
    public async Task<IActionResult> Index()
    {
        var restaurantDbContext = _context.OrderMasters.Include(o => o.Customer);
        return View(await restaurantDbContext.ToListAsync());
    }

    // GET: OrderMasters/Details/5
    public async Task<IActionResult> Details(long? id)
    {
        if (id == null || _context.OrderMasters == null)
        {
            return NotFound();
        }

        var orderMaster = await _context.OrderMasters
            .Include(o => o.Customer)
            .FirstOrDefaultAsync(m => m.OrderMasterId == id);
        if (orderMaster == null)
        {
            return NotFound();
        }

        return View(orderMaster);
    }

    // GET: OrderMasters/Create
    public IActionResult Create()
    {
        ViewData["CustomerId"] = new SelectList(_context.Customers, "CustomerId", "CustomerId");
        return View();
    }

    // POST: OrderMasters/Create
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create([Bind("OrderMasterId,OrderNumber,CustomerId,PaymentMethod,GrandTotal")] OrderMaster orderMaster)
    {
        if (ModelState.IsValid)
        {
            _context.Add(orderMaster);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        ViewData["CustomerId"] = new SelectList(_context.Customers, "CustomerId", "CustomerId", orderMaster.CustomerId);
        return View(orderMaster);
    }

    // GET: OrderMasters/Edit/5
    public async Task<IActionResult> Edit(long? id)
    {
        if (id == null || _context.OrderMasters == null)
        {
            return NotFound();
        }

        var orderMaster = await _context.OrderMasters.FindAsync(id);
        if (orderMaster == null)
        {
            return NotFound();
        }
        ViewData["CustomerId"] = new SelectList(_context.Customers, "CustomerId", "CustomerId", orderMaster.CustomerId);
        return View(orderMaster);
    }

    // POST: OrderMasters/Edit/5
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(long id, [Bind("OrderMasterId,OrderNumber,CustomerId,PaymentMethod,GrandTotal")] OrderMaster orderMaster)
    {
        if (id != orderMaster.OrderMasterId)
        {
            return NotFound();
        }

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(orderMaster);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderMasterExists(orderMaster.OrderMasterId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return RedirectToAction(nameof(Index));
        }
        ViewData["CustomerId"] = new SelectList(_context.Customers, "CustomerId", "CustomerId", orderMaster.CustomerId);
        return View(orderMaster);
    }

    // GET: OrderMasters/Delete/5
    public async Task<IActionResult> Delete(long? id)
    {
        if (id == null || _context.OrderMasters == null)
        {
            return NotFound();
        }

        var orderMaster = await _context.OrderMasters
            .Include(o => o.Customer)
            .FirstOrDefaultAsync(m => m.OrderMasterId == id);
        if (orderMaster == null)
        {
            return NotFound();
        }

        return View(orderMaster);
    }

    // POST: OrderMasters/Delete/5
    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed(long id)
    {
        if (_context.OrderMasters == null)
        {
            return Problem("Entity set 'RestaurantDbContext.OrderMasters'  is null.");
        }
        var orderMaster = await _context.OrderMasters.FindAsync(id);
        if (orderMaster != null)
        {
            _context.OrderMasters.Remove(orderMaster);
        }

        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Index));
    }

    private bool OrderMasterExists(long id)
    {
        return (_context.OrderMasters?.Any(e => e.OrderMasterId == id)).GetValueOrDefault();
    }
}
