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
  
  ngOnInit(): void {
    this.empForm = this.fb.group({
      employees: this.fb.array([])
    })
    
    for(let i=0;i<3;i++){
      this.employees().push(this.newEmployee());
    }
    for(let i=0;i<3;i++){
      for(let j=0;j<4;j++){
        this.employeeSkills(i).push(this.newSkill());
      }
    }
 
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
    let length = (this.employees().length)-1;
    for(let i=0;i<this.employeeSkills(0).length;i++){
      this.employeeSkills(length).push(this.newSkill());
    }
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
   // this.employeeSkills(empIndex).push(this.newSkill());
    for(let i=0;i<this.employees().length;i++){
      this.employeeSkills(i).push(this.newSkill());
    }
  }
  
  addEmployeeSkillMy() {
  for(let i=0;i<this.employees().length;i++){
    this.employeeSkills(i).push(this.newSkill());
  }
}
  insertEmployeeSkillMy(index) {
  for(let i=0;i<this.employees().length;i++){
    this.employeeSkills(i).insert(index+1,this.newSkill());
  }
}
 
  removeEmployeeSkill(skillIndex:number) {

    for(let i=0;i<this.employees().length;i++){
      this.employeeSkills(i).removeAt(skillIndex);
    }

  }
 
  onSubmit() {
    console.log(this.empForm.value);
  }
 

}
