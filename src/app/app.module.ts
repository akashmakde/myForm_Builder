import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddRowDynamicallyComponent } from './add-row-dynamically/add-row-dynamically.component';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentEducationComponent } from './student/student-education/student-education.component';
import { StudentResultComponent } from './student/student-result/student-result.component';
import { StudentProjectComponent } from './student/student-project/student-project.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeStatisticsComponent } from './employee/employee-statistics/employee-statistics.component';
import { EmployeeSkillsComponent } from './employee/employee-skills/employee-skills.component';
import { SscComponent } from './student/student-education/ssc/ssc.component';
import { HscComponent } from './student/student-education/hsc/hsc.component';
import { GraduationComponent } from './student/student-education/graduation/graduation.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { NameEmailAgeComponent } from './name-email-age/name-email-age.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { GarageComponent } from './cva1/garage/garage.component';
import { CarComponent } from './cva1/car/car.component';
import { ProfileComponent } from './cva1/reusableForm1/profile/profile.component';
import { PasswordComponent } from './cva1/reusableForm1/password/password.component';
import { MainFormComponent } from './cva1/reusableForm1/main-form/main-form.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {NgxPaginationModule} from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {DragDropModule} from '@angular/cdk/drag-drop';//angular material
import {MatSidenavModule} from '@angular/material/sidenav';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { DragAndDRopComponent } from './drag-and-drop/drag-and-drop.component';
import { Home4Component } from './home4/home4.component';
import { FinalFormComponent } from './final-form/final-form.component';
import { NestedFormArrayExComponent } from './nested-form-array-ex/nested-form-array-ex.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    AddRowDynamicallyComponent,
    MynavbarComponent,
    StudentComponent,
    EmployeeComponent,
    StudentEducationComponent,
    StudentResultComponent,
    StudentProjectComponent,
    EmployeeProfileComponent,
    EmployeeStatisticsComponent,
    EmployeeSkillsComponent,
    SscComponent,
    HscComponent,
    GraduationComponent,
    PagenotfoundComponent,
    HomeComponent,
    NameEmailAgeComponent,
    SubjectsComponent,
    CheckboxComponent,
    GarageComponent,
    CarComponent,    
    ProfileComponent,
    PasswordComponent,
    MainFormComponent,
    Home2Component,
    Home3Component,
    DragAndDRopComponent,
    Home4Component,
    FinalFormComponent,
    NestedFormArrayExComponent,
    DynamicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule,
    NgxDropzoneModule,
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule,
    AutocompleteLibModule,
    DragDropModule,
    MatSidenavModule
  ],
  providers: [
    {provide:LocationStrategy,useClass:PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
