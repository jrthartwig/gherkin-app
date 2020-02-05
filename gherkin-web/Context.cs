using Microsoft.EntityFrameworkCore;
using Entities.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Linq;

public class Context : DbContext
{


    public DbSet<Feature> Feature { get; set; }

    public DbSet<Story> Story { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("server=FWA-SS-007\\SQLEXPRESS;Integrated Security=True;Initial Catalog=Gherkin;");

    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        foreach (var property in StringProperties(modelBuilder))
        {
            if (property.GetMaxLength() == null)
            {
                property.SetMaxLength(250);
            }
        }
    }
    static IEnumerable<IMutableProperty> StringProperties(ModelBuilder modelBuilder)
    {
        return modelBuilder.Model.GetEntityTypes()
                .SelectMany(t => t.GetProperties())
                .Where(p => p.ClrType == typeof(string));
    }
}

