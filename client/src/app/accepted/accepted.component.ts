import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.css']
})
export class AcceptedComponent implements OnInit {
students: any = []
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getUsers();
  }

  getUsers()
  {
    return this.http.get<any>('https://localhost:5001/api/Student').subscribe(response => {
      this.students = response
    },
    error => {
      console.log(error);
      
    }
    )};


}
