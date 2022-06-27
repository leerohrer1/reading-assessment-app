import { Injectable } from '@angular/core';
import { Checklist } from './checklist';
import { CHECKLISTS } from './checklist-items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  constructor() {}

  getChecklists(): Observable<Checklist[]> {
    const checklists = of(CHECKLISTS);
    return checklists;
  }

  getChecklist(id: string): Observable<Checklist> {
    const checklist = CHECKLISTS.find(c => c.id === id)!;
    return of(checklist);
  }
}
