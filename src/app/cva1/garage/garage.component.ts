import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {

  CVAexample1:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.CVAexample1=this.fb.group({
      nameOwner:['',Validators.required],
      carTata:['',Validators.required]
    })

    
  }


  public disableAll():void{
    Object.keys(this.CVAexample1.controls).forEach(key=>{
      const control =this.CVAexample1.get(key);
      control.disable();
    });
  }
    public save(form: FormGroup):void{
      console.log(form);
      Object.keys(this.CVAexample1.controls).forEach(key=>{
        const control= form.get(key);
        control.markAsDirty;
        
      })
      
    }


  
}
