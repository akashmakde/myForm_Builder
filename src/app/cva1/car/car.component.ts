import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  providers:[{
    provide : NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>CarComponent),
    multi:true
  }]
})

export class CarComponent implements ControlValueAccessor {
  
  value:string='';
  onChange:(value:string) => void;
  onTouched:() => void;
  disabled :boolean;

  constructor() { }
 

  writeValue(value: string): void {
      this.value = value ? value : '';
  }
  registerOnChange(fn: any): void {
      this.onChange= fn;
  }
  registerOnTouched(fn: any): void {
      this.onTouched= fn;
  }
  setDisabledState?(isDisabled: boolean): void {
      this.disabled=isDisabled;
  }



}
