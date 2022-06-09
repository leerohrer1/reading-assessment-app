import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';
import { GradeLevelComponent } from './grade-level/grade-level.component';
import { GroupComponent } from './group/group.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersClassComponent } from './teachers-class/teachers-class.component';

const routes: Routes = [
  { path: 'checklists', component: ChecklistComponent },
  { path: 'grade-levels', component: GradeLevelComponent },
  { path: 'groups', component: GroupComponent },
  { path: 'students', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'class-roster', component: TeachersClassComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
