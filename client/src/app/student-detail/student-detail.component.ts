import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { student } from '../entity/student';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(private http: HttpClient) { }
students: student[] = [];  
student!: student;
ime!: string;
ngOnInit(){
  this.getUsers();
  this.getUser(this.ime);

  }

  getUsers()
  {
   return this.http.get<student[]>('https://localhost:5001/api/Student').subscribe(response => 
   {
     this.students = response
   });
  }


  /*loadMember()
  {
    this.studentService.getStudent(this.route.snapshot.paramMap.get('name') || "").subscribe(member =>
      {
        this.student = member;
      })
  }
*/
  
getUser(name: string)
{
  return this.http.get<student>('https://localhost:5001/api/Student/username/'+name).subscribe(student => {
    this.student = student;
    
  })
}






}
