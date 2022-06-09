import { Component, OnInit } from '@angular/core';
import { Checklist } from '../checklist';
import { CHECKLISTS } from '../checklist-data';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
class ChecklistComponent implements OnInit {
  checklists = CHECKLISTS;

  constructor() {}

  ngOnInit(): void {}
}

export { ChecklistComponent };
