using System.Collections.Generic;
using API.Entities;

namespace API.Data
{
    public interface IStudentRepo
    {
        IEnumerable<Student> GetStudents();

        Student GetStudentByUsername(string name);

        void CreateStudent(Student student);

        void DeleteStudent(Student student);

        bool SaveChanges();

        Student GetStudentById(int id);
    }
}