import { Component, OnInit } from '@angular/core';
import { Checklist } from '../checklist';
import { CHECKLISTS } from '../checklist-items';
import { ChecklistService } from '../checklist.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
class ChecklistComponent implements OnInit {
  checklists: Checklist[] = [];

  constructor(private checklistService: ChecklistService) {}

  ngOnInit(): void {
    this.getChecklists();
  }

  getChecklists(): void {
    this.checklistService
      .getChecklists()
      .subscribe((checklists) => (this.checklists = checklists));
  }
}

export { ChecklistComponent };
