import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-sudent-data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  private studentsUrl = 'api/students';

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  getStudent(name: string): Observable<Student> {
    const student = STUDENTS.find((s) => s.name === name)!;
    return of(student);
  }

  // updateStudent(student: Student): Student {
  //   const index = this.getStudents().findIndex((e: Student) => e.name === student.name);
  //   return this.getStudents().splice(index, 1, student);
  // }
}
