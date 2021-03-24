import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      profile:[,Validators.required],
     //  password:[]
    })
  }


submit():void{

}
}
