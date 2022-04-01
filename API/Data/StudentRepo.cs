using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Data
{
    public class StudentRepo : IStudentRepo
    {
        private readonly Context _context;

        public StudentRepo(Context context)
        {
            _context = context;
        }

        public void CreateStudent(Student student)
        {
           _context.Students.Add(student);
        }

        public void DeleteStudent(Student student)
        {
            _context.Students.Remove(student);
        }

        public Student GetStudentById(int id)
        {
        return _context.Students.FirstOrDefault(x => x.Id == id);
        }

        public Student GetStudentByUsername(string name)
        {
           return _context.Students.FirstOrDefault(x => x.Name == name);
        }

        public IEnumerable<Student> GetStudents()
        {
            return _context.Students.ToList();
        }

        public bool SaveChanges()
        {
           return (_context.SaveChanges() >= 0);
        }
    }
}