import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-sudent-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  getStudents(): Observable<Student[]> {
    const students = of(STUDENTS);
    return students;
  }

  getStudent(name: string): Observable<Student> {
    const student = STUDENTS.find(s => s.name === name)!;
    return of(student);
  }
}
