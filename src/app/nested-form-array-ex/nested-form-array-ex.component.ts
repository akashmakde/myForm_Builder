import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-form-array-ex',
  templateUrl: './nested-form-array-ex.component.html',
  styleUrls: ['./nested-form-array-ex.component.scss']
})
export class NestedFormArrayExComponent implements OnInit {

  empForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.empForm = this.fb.group({
      employees: this.fb.array([])
    })
  }
  title = 'Nested FormArray Example Add Form Fields Dynamically';
 
 
  employees(): FormArray {
    return this.empForm.get("employees") as FormArray
  }
 
 
  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills:this.fb.array([])
    })
  }
 
 
  addEmployee() {
    console.log("Adding a employee");
    this.employees().push(this.newEmployee());
  }
 
 
  removeEmployee(empIndex:number) {
    this.employees().removeAt(empIndex);
  }
 
 
  employeeSkills(empIndex:number) : FormArray {
    return this.employees().at(empIndex).get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
 
  addEmployeeSkill(empIndex:number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }
 
  removeEmployeeSkill(empIndex:number,skillIndex:number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }
 
  onSubmit() {
    console.log(this.empForm.value);
  }
 

}
