import { Component, OnInit } from '@angular/core';
import { Checklist } from '../checklist';
import { CHECKLISTS } from '../checklist-items';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
class ChecklistComponent implements OnInit {
  checklists = CHECKLISTS;

  selectedChecklist?: Checklist;

  onSelect(checklist: any): void {
    this.selectedChecklist = checklist;
  }

  constructor() {}

  ngOnInit(): void {}
}

export { ChecklistComponent };
