import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { GradeLevelComponent } from './grade-level/grade-level.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { GroupComponent } from './group/group.component';
import { TeachersClassComponent } from './teachers-class/teachers-class.component';

@NgModule({
  declarations: [
    AppComponent,
    GradeLevelComponent,
    TeacherComponent,
    StudentComponent,
    GroupComponent,
    TeachersClassComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
