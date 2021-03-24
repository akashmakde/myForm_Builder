import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  empForm:FormGroup;
  constructor(private fb:FormBuilder) { }
  count=0;
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
      skills:this.fb.array([])
    })
  }
 
 
  addEmployee() {
    this.employees().push(this.newEmployee());
    console.log(this.employeeSkills(0).length);

    let length = this.employeeSkills(0).length;
    if(this.count>0){
    for(let i=0; i<length;i++){
      this.addEmployeeSkill(this.count);
    }
  }
  this.count++;
  }
 
 
  removeEmployee(empIndex:number) {
    this.employees().removeAt(empIndex);
  }
 
 
  employeeSkills(empIndex:number) : FormArray {
    return this.employees().at(empIndex).get("skills") as FormArray;
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',      
    })
  }
 
  addEmployeeSkill(empIndex:number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }
  
  addEmployeeSkillMy() {
// let index:number;
  for(let index=0;index<this.employeeSkills(0).length;index++){
    this.employeeSkills(index).push(this.newSkill());
  }
}
 
  removeEmployeeSkill(empIndex:number,skillIndex:number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }
 
  onSubmit() {
    console.log(this.empForm.value);
  }
 

}
