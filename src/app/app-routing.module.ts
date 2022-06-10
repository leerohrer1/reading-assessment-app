import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';
import { StudentComponent } from './student/student.component';
import { TeachersClassComponent } from './teachers-class/teachers-class.component';

const routes: Routes = [
  { path: 'checklists', component: ChecklistComponent },
  { path: 'students', component: StudentComponent },
  { path: 'class-roster', component: TeachersClassComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
