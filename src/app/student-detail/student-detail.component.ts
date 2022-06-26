import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student?: Student; 
  
  constructor() { }

  ngOnInit(): void {
  }

  studentScore(student: Student): string {
    let checklist: string = `${student.name} has not mastered a checklist, yet.`
    ;
    if(student.scores.slice(0, 34).filter(e => e === true).length > 31){
      checklist = 'Checklist A/B'
    }
    if(student.scores.slice(35, 73).filter(e => e === true).length > 38){
      checklist = 'Checklist C/D'
    }
    if(student.scores.slice(74).filter(e => e === true).length > 40){
      checklist = 'Checklist E';
    }

    return checklist;
  }

}
