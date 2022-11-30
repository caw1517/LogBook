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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<LogBookEntry>().HasOne(a => a.Aircraft).WithMany(l => l.LogBookEntries);
    }
}