import { Component, OnInit, Input } from '@angular/core';
import { Checklist } from '../checklist';
import { CHECKLISTS } from '../checklist-items';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChecklistService } from '../checklist.service';

@Component({
  selector: 'app-checklist-detail',
  templateUrl: './checklist-detail.component.html',
  styleUrls: ['./checklist-detail.component.css'],
})
export class ChecklistDetailComponent implements OnInit {
  @Input() checklist?: Checklist;

  constructor(
    private route: ActivatedRoute,
    private checklistService: ChecklistService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getChecklist();
  }

  getChecklist(): void {
    const id: string = this.route.snapshot.paramMap.get('id')!;
    this.checklistService
      .getChecklist(id)
      .subscribe((checklist) => (this.checklist = checklist));
  }

  goBack(): void {
    this.location.back();
  }
  
}
