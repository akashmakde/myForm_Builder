import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from '../student-info.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.scss'],
})
export class Subject1Component implements OnInit {
  subject: FormGroup;
  constructor(
    private _studentInfo: StudentInfoService,
    private fb: FormBuilder
  ) {}

  data = this._studentInfo.getGlobalData();
  checksum: number = null;

  ngOnInit(): void {
    this.subject = this.fb.group({
      name: null,
    });
  }

  onClick() {
    let id = this.subject.controls['name'].value;
   
    console.log(id);
    
    while(id> 10) {      
     id = this.checksumFunct(id);
     console.log("jhdjdj");
   //  console.log(id);
     
    } 
    this.checksum = this.checksumFunct(id);

  }
  checksumFunct(id) {
    let temp = 0;
    while (id > 0) {
      temp = temp + (id % 10);
      id = Math.floor(id / 10);

      console.log("temp :",temp);
      console.log(id);
    }
  //console.log(temp);
  
    return temp;
    
  }
}
