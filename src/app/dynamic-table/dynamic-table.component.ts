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
      table: this.fb.array([])
    })
    
    for(let i=0;i<3;i++){
      this.table().push(this.newRow());
    }
    for(let i=0;i<3;i++){
      for(let j=0;j<4;j++){
        this.rowsItems(i).push(this.newItem());
      }
    }
 
  }
  // title = 'Nested FormArray Example Add Form Fields Dynamically';
 
 
  table(): FormArray {
    return this.empForm.get("table") as FormArray
  }
 
 
  newRow(): FormGroup {
    return this.fb.group({   
      items:this.fb.array([])
    })
  }
 
 
  addRow() {
    this.table().push(this.newRow());
    let length = (this.table().length)-1;
    for(let i=0;i<this.rowsItems(0).length;i++){
      this.rowsItems(length).push(this.newItem());
    }
  }
 
 
  removeRow(rowIndex:number) {
    this.table().removeAt(rowIndex);
  }
 
 
  rowsItems(rowIndex:number) : FormArray {
    return this.table().at(rowIndex).get("items") as FormArray;
  }
 
  newItem(): FormGroup {
    return this.fb.group({
      item: '',      
    })
  }
 
  addRowItem(rowIndex:number) {
   // this.rowsItems(rowIndex).push(this.newItem());
    for(let i=0;i<this.table().length;i++){
      this.rowsItems(i).push(this.newItem());
    }
  }
  
  // addEmployeeSkillMy() {
  // for(let i=0;i<this.table().length;i++){
  //   this.rowsItems(i).push(this.newItem());
  // }
// }
  insertRowItem(index) {
  for(let i=0;i<this.table().length;i++){
    this.rowsItems(i).insert(index+1,this.newItem());
  }
}
 
  removeRowItem(itemIndex:number) {
    for(let i=0;i<this.table().length;i++){
      this.rowsItems(i).removeAt(itemIndex);
    }
  }
 
  onSubmit() {
    //console.log(this.empForm.value);
  }
 

}
