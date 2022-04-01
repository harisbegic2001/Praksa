import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { student } from '../entity/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
students: any[] = [] 
  constructor(private http: HttpClient) { }


  getStudents(){
    if (this.students.length > 0) return of(this.students) /*Šta ovo radi */
    return this.http.get<any[]>('https://localhost:5001/api/Student').pipe( /*Šta ovo radi */
      map(students => {
        this.students = students;/*Šta ovo radi */
        return students
      })
    )
  
  }

  getStudent(name: string){
    const student = this.students.find(x=> x.name == name);
    if (student == undefined) return of(student);
    return this.http.get<student>('https://localhost:5001/api/Student/username/'+name) 

  }



}
