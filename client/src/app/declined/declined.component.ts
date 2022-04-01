import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-declined',
  templateUrl: './declined.component.html',
  styleUrls: ['./declined.component.css']
})
export class DeclinedComponent implements OnInit {
students: any = []

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getUsers();
    //this.students.sort() Ništa ne znači
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
