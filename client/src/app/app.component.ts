import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Submissions:';
  // space = '     ';
  // students: any;
  
  constructor(private http: HttpClient){}
  
  ngOnInit(){
   // this.getUsers();
  }
   /* getUsers()
    {
     return this.http.get<any>('https://localhost:5001/api/Student').subscribe(response => {
        this.students = response;
      },
      error => {
        console.log(error);
        
      });
    }
  */
}
