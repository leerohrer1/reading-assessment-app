import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent implements OnInit {
  @Input() student?: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const name: string = this.route.snapshot.paramMap.get('name')!;
    this.studentService
      .getStudent(name)
      .subscribe((student) => (this.student = student));
  }

  studentScore(student: Student): string {
    let checklist: string = `${student.name} has not mastered a checklist, yet.`;
    if (student.scores.slice(0, 34).filter((e) => e === true).length > 31) {
      checklist = 'Checklist A/B';
    }
    if (student.scores.slice(34, 76).filter((e) => e === true).length > 38) {
      checklist = 'Checklist C/D';
    }
    if (student.scores.slice(76).filter((e) => e === true).length > 40) {
      checklist = 'Checklist E';
    }

    return checklist;
  }

  goBack(): void {
    this.location.back();
  }
}
