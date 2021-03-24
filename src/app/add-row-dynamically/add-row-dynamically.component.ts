import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-row-dynamically',
  templateUrl: './add-row-dynamically.component.html',
  styleUrls: ['./add-row-dynamically.component.scss']
})
export class AddRowDynamicallyComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  addRowsDynamically:FormGroup;
  ngOnInit(): void {
    this.addRowsDynamically=this.fb.group({
      itemsRows:this.fb.array ([this.initItemRows])
    })
 
  }
  initItemRows(){
    return this.fb.group({
          name:['',[Validators.required]],
          email:['',[Validators.required]],
          age:['',[Validators.required]],
          year:['',[Validators.required]],
    })
  }
  addNewRows(){
    const control = <FormArray>this.addRowsDynamically.controls['itemsRows'];
    control.push(this.initItemRows());
  }
  deleteRows(){}


}
