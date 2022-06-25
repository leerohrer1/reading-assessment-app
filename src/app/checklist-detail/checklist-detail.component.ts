import { Component, OnInit, Input } from '@angular/core';
import { Checklist } from '../checklist';
import { CHECKLISTS } from '../checklist-items';

@Component({
  selector: 'app-checklist-detail',
  templateUrl: './checklist-detail.component.html',
  styleUrls: ['./checklist-detail.component.css']
})
export class ChecklistDetailComponent implements OnInit {

  @Input() checklist?: Checklist;

  constructor() { }

  ngOnInit(): void {
  }

}
