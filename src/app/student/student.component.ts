import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../mock-sudent-data';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students = STUDENTS;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const name = Number(this.route.snapshot.paramMap.get('name'));
  }
}
