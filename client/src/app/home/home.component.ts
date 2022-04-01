import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { student } from '../entity/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  title = 'Submissions:';
  space = '     ';
  students: any = {};
  student: any
  
  constructor(private http: HttpClient){}
  
  ngOnInit(){
    this.getUsers();    
  }

  ngOnChanges(): void {
    this.getUsers();

      
  }
    getUsers()
    {
     return this.http.get<any>('https://localhost:5001/api/Student').subscribe(response => {
        this.students = response;
      },
      error => {
        console.log(error);
        
      });
    }

    getUser(name: string)
    {
      return this.http.get<student>('https://localhost:5001/api/Student/username/' + name).subscribe(student =>
      {
        this.student = student
      } )
    }

    toggleUser(id: number)
    {
      var varijabla = this.http.put('https://localhost:5001/api/Student/'+id, id).subscribe()
      this.getUsers();
    
    }

    declineUser(id: number)
    {
      var varijabla = this.http.put('https://localhost:5001/api/Student/username/'+id, id).subscribe();
      this.getUsers();
    }

}
