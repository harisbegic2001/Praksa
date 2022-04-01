import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { student } from '../entity/student';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
model: any = {}
  constructor(private http :HttpClient) { }

  ngOnInit() {
  }

  createUser()
  {
    return this.http.post<any>('https://localhost:5001/api/Student', this.model ).subscribe(response => {
      this.model = response;
    },
    error => {
      console.log(error);
      
    })

  }
}
