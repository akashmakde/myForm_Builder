import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core';

// describes what the return value of the form control will look like
export interface ProfileFormValues {
  firstName: string;
  lastName: string;
  email: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
 providers:[
   {
    provide :NG_VALUE_ACCESSOR,
    useExisting:forwardRef(() => ProfileComponent),
    multi:true
  },
  {
    provide :NG_VALIDATORS,
    useExisting:forwardRef(() => ProfileComponent),
    multi:true
  }
]
})
export class ProfileComponent implements ControlValueAccessor, OnDestroy {
  

  profileForm:FormGroup;
  subscriptions: Subscription[] = [];

  get value(): ProfileFormValues {
    return this.profileForm.value;
  }

  set value(value: ProfileFormValues) {
    this.profileForm.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  

  constructor(private fb:FormBuilder) { 
    this.profileForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],    
      });
      this.subscriptions.push(
        // any time the inner form changes update the parent of any change
        this.profileForm.valueChanges.subscribe(value => {
          this.onChange(value);
          this.onTouched();
        })
      );
} 
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.profileForm.reset();
    }
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  // communicate the inner form validation to the parent form
  validate(_: FormControl) {
    return this.profileForm.valid ? null : { profile: { valid: false } };
  }

}