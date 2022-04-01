using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentRepo _studentRepo;
        private readonly Context _context;

        public StudentController(IStudentRepo studentRepo, Context context)
        {
            _studentRepo = studentRepo;
            _context = context;
        }

        

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetAllStudents()
        {
               return await _context.Students.ToListAsync();
        }

        [HttpGet("username/{username}")]
        public ActionResult<Student> GetStudent(string username)
        {
            return _studentRepo.GetStudentByUsername(username);
        }


        [HttpGet("{id}")]
        public ActionResult<Student> GetStudentId(int id)
        {
            return _studentRepo.GetStudentById(id);
        }



        [HttpDelete("{id}")]
        public ActionResult DeleteStudentbyId(int id)
        {
            var user = _studentRepo.GetStudentById(id);

            if (user == null) {return BadRequest("No user found");}

            _studentRepo.DeleteStudent(user);
            _studentRepo.SaveChanges();
            return NoContent();
        }


        [HttpPost]
        public ActionResult CreateStudent(Student student)
        {
            var  newbie = new Student {

                Name = student.Name,
                LastName = student.LastName,
                Email = student.Email,
                PhoneNumber = student.PhoneNumber,
                Created = DateTime.Now,
                Status = null

            };

            _studentRepo.CreateStudent(newbie);
            _studentRepo.SaveChanges();
            return Ok(newbie);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateStudent(int id)
        {
            var student = _studentRepo.GetStudentById(id);

            student.Status = true;

            _studentRepo.SaveChanges();

            return Ok();

        }

        [HttpPut("username/{id}")]
        public ActionResult DeclineStudent(int id)
        {
            var student = _studentRepo.GetStudentById(id);

            student.Status = false;

            _studentRepo.SaveChanges();

            return NoContent();
        }

    }
}