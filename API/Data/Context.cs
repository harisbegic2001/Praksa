using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> opt) : base (opt)
        {
        }

        public DbSet<Student> Students {get; set;}
    
    }
}