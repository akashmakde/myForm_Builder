import { CheckboxComponent } from './checkbox/checkbox.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GraduationComponent } from './student/student-education/graduation/graduation.component';
import { HscComponent } from './student/student-education/hsc/hsc.component';
import { EmployeeSkillsComponent } from './employee/employee-skills/employee-skills.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StudentInfoService } from './student-info.service';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentEducationComponent } from './student/student-education/student-education.component';
import { StudentProjectComponent } from './student/student-project/student-project.component';
import { StudentResultComponent } from './student/student-result/student-result.component';
import { EmployeeStatisticsComponent } from './employee/employee-statistics/employee-statistics.component';
import { SscComponent } from './student/student-education/ssc/ssc.component';
import { pathToFileURL } from 'url';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
import { NameEmailAgeComponent } from './name-email-age/name-email-age.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { GarageComponent } from './cva1/garage/garage.component';
import { CarComponent } from './cva1/car/car.component';
import { MainFormComponent } from './cva1/reusableForm1/main-form/main-form.component';
import { ProfileComponent } from './cva1/reusableForm1/profile/profile.component';
import { PasswordComponent } from './cva1/reusableForm1/password/password.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';
import { FinalFormComponent } from './final-form/final-form.component';
import { NestedFormArrayExComponent } from './nested-form-array-ex/nested-form-array-ex.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},  
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentComponent,
    children:[
      {path:'studentEducation',component:StudentEducationComponent,
          children:[
            {path:'ssc',component:SscComponent},
            {path:'hsc',component:HscComponent},
            {path:'graduation',component:GraduationComponent}
             ]
        },
      {path:'studentProject',component:StudentProjectComponent},
      {path:'studentResult',component:StudentResultComponent}
    ]
  } ,

  {path:'employee',component:EmployeeComponent,
    children:[
      {path:'employeeProfile',component:EmployeeProfileComponent},
      {path:'employeeSkills',component:EmployeeSkillsComponent},
      {path:'employeeStatistics',component:EmployeeStatisticsComponent}
             ]
  },
  {path:'sharedComp',component:NameEmailAgeComponent},
  {path:'selectList',component:SubjectsComponent},
  {path:'checkbox',component:CheckboxComponent},
  {path:'garage',component:GarageComponent},
  {path:'car',component:CarComponent},
  {path:'mainForm',component:MainFormComponent},
  {path:'profileForm',component:ProfileComponent},
  {path:'studentInfo',component:StudentInfoComponent},
  {path:'home2',component:Home2Component},
  {path:'home3',component:Home3Component},
  {path:'home4',component:Home4Component},
  {path:'finalForm',component:FinalFormComponent},
  {path:'NestedFormArray',component:NestedFormArrayExComponent},
  {path:'dynamicTable',component:DynamicTableComponent},
  {path:'**',component:PagenotfoundComponent}  

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
