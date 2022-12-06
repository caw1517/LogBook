using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class DataContext : DbContext
{
    public DataContext (DbContextOptions<DataContext> options)
        : base(options)
    {
    }

    public DbSet<Aircraft> Aircrafts => Set<Aircraft>();
    public DbSet<LogBookEntry> LogBookEntries => Set<LogBookEntry>();
    public DbSet<User> Users => Set<User>();
}