import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { StudentInfoService } from '../student-info.service';

@Component({
  selector: 'app-final-form',
  templateUrl: './final-form.component.html',
  styleUrls: ['./final-form.component.scss']
})
export class FinalFormComponent implements OnInit {
 myObj = null;
 finalForm:FormGroup;
  constructor( private myService:StudentInfoService,private fb:FormBuilder) { 
    this.myObj = this.myService.getObj();

  }

  ngOnInit(): void {
  
    this.finalForm = this.fb.group({
      //adding formControls dynamically
    })
  
    for(let i=0; i<this.myObj.length;i++){
     let control = this.myObj[i].formControl;
     this.finalForm.addControl(control, new FormControl());
    } 
  }
  
  submitForm(){    
    console.log("form submitted successfully");        
  }

}
