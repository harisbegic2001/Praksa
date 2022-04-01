using System;
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Student
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string Name { get; set; }
    
        [Required]
        [MaxLength(20)]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }

        [Required]
        public string PhoneNumber { get; set; }
    
        public DateTime Created { get; set; }

        public Nullable<bool> Status { get; set; }
    }
}