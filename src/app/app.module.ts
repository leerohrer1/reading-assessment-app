import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { GradeLevelComponent } from './grade-level/grade-level.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { GroupComponent } from './group/group.component';
import { TeachersClassComponent } from './teachers-class/teachers-class.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    GradeLevelComponent,
    TeacherComponent,
    StudentComponent,
    GroupComponent,
    TeachersClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
