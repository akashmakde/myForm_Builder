import { Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {FormBuilder,FormGroup,FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormArrayName, FormArray, ValidatorFn, Validator} from '@angular/forms'
import { Subscription } from 'rxjs';
import {myObjInterface} from './myObjRec';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


// describes what the return value of the form control will look like
export interface NameEmailAgeValues{
   surname:string;
  // mySelectList:string;
  // checkbox:boolean;
}

@Component({
  selector: 'app-name-email-age',
  templateUrl: './name-email-age.component.html',
  styleUrls: ['./name-email-age.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>NameEmailAgeComponent),
      multi: true
    },
    {
      provide:NG_VALIDATORS,
      useExisting: forwardRef(() =>NameEmailAgeComponent),
      multi: true
    }
  ]
})
export class NameEmailAgeComponent implements  ControlValueAccessor,OnChanges,Validator{
 
 ////////////capturing json object in myObj setting to null default value
 @Input() myObj:myObjInterface=null;
  myObjDummy:myObjInterface=null;
//  ==============================================================
    selectMultipleCheckboxes:any=[];// multi checkbox array to show what is selected
    selectMultipleCheckboxesTouch=0;
    //setting flag variable to unlock template items ,,initially setting them to false
    inputFieldFlag:boolean=false;
    selectListFlag:boolean=false;
    checkboxFlag:boolean=false;
    CKEditorFlag:boolean=false;
    dropdownFlag:boolean=false;
    textAreaFlag:boolean=false;
    radioButtonFlag:boolean=false;
    multipleCheckboxFlag:boolean=false;
    dragAndDropFlag:boolean=false;
    tableFlag:boolean=false;
    table2Flag:boolean=false;
    cardFlag:boolean=false;
    cardWithSliderFlag:boolean=false;
    slidingCardsFlag:boolean=false;
    owlCarouselCardsFlag:boolean=false;
    owlCarouselImgFlag:boolean=false;
    autoCompleteFlag:boolean=false;
    tranItemsBetListFlag:boolean=false;//for angular items
    itemTransferBetweenListFlag:boolean=false;//my custom itemTransferBetweenList

    applyMyCustmClasses:string=null;
   // changeCounter:number;

//=======================================================================================
//=======================TRANSFERING SELECTED ITEM BETWEEN LISTS ===================================================
list1 = [
  // { listItem: 'AVENGERS',    selected: false },
  // { listItem: 'BATMAN',      selected: false },
  // { listItem: 'SPIDER-MAN',  selected: false },
  // { listItem: 'WONDER WOMEN',selected: false },
  // { listItem: 'IRON MAN',    selected: false },
  // { listItem: 'IRON MAN-2',  selected: false },
  // { listItem: 'IRON MAN-3',  selected: false },
];
list2 = [
       //empty array
];

public toggleSelection(item: { listItem: string; selected: boolean },list: number) {
  item.selected = !item.selected;
  if (list === 1) {
    this.list2.forEach((item) => {
      item.selected = false;
    });
  }
  if (list === 2) {
    this.list1.forEach((item) => {
      item.selected = false;
    });
  }
}

public moveSelected(direction) {
  if (direction === 'left') {
    this.list2.forEach((item) => {
      if (item.selected) {
        this.list1.push(item);
      }
    });
    this.list2 = this.list2.filter((i) => !i.selected);
    //removing selected item class
    this.removeSelected(this.list1);
  } else {
    this.list1.forEach((item) => {
      if (item.selected) {
        this.list2.push(item);
      }
    });
    this.list1 = this.list1.filter((i) => !i.selected);
    //removing selected item class
    this.removeSelected(this.list2);
  }
}

public moveAll(direction: string) {
  if (direction === 'left') {
    this.list1 = [...this.list1, ...this.list2];
    this.list2 = [];
    //removing selected item
    this.removeSelected(this.list1);
  } else {
    this.list2 = [...this.list2, ...this.list1];
    this.list1 = [];
    //removing selected item
    this.removeSelected(this.list2);
  }
}
//removing color of selected items if moved to other list
public removeSelected(list) {
  list.forEach((item) => {
    if (item.selected) {
      item.selected = !item.selected;
    }
  });
} //removing color of selected items if moved to other list ends

addItemLeftList(){
  let item = { listItem:null,  selected: false };
  item.listItem =  this.reusableComponentform.get('itemLeft').value;
  if ( item.listItem != null) {
    this.list1.push(item);           
  }
 this.reusableComponentform.controls['itemLeft'].setValue(null);
}
addItemRightList(){
  let item = { listItem:"",  selected: false };
  item.listItem =  this.reusableComponentform.get('itemRight').value;
  if ( item.listItem != null) {
    this.list2.push(item);           
  }   this.reusableComponentform.controls['itemRight'].setValue(null);
}
//=======================TRANSFERING SELECTED ITEM BETWEEN LISTS ENDS ===================================================
//=======================================================================================

  // ===================CKE EDITOR===================================================
  //public Editor = ClassicEditor;
  public Editor = ClassicEditor;
  ckconfig = {
      toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
    }; 
    myTableRowHeading:string[];
  reusableComponentform:FormGroup;
  subscriptions: Subscription[] = [];
  
  //===================CKE EDITOR ends==============================================================
//=============================================================================================
  //  =================PAGINATION VARS===================================== ===============   
    p: number = 1;
    collection: any[]

    pageChanged(event){
      this.p=event;
    }
    //==================PAGINATION ENDS==================================================
    //======================================================================================
    //==================TRANSFERING ITEMS BETWEEN LISTS ===========================================
    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
    }
    //==================TRANSFERING ITEMS BETWEEN LISTS ENDS===========================================
//======================================================================================================
    // =============================AUTO COMPLETE===================================
    keyword = 'name';    
    
    selectEvent(item) {
      // do something with selected item
    }  
    onChangeSearch(val: string) {
      // fetch remote data from here
      // And reassign the 'data' which is binded to 'data' property.
    }    
    onFocused(e){
      // do something when input is focused
    }
    // =============================AUTO COMPLETE ENDS==============================
//==============================================================================================
    // =====================OWL CAROUSEL only Images================================================
    customOptionsImages: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 300,
      navText: ['Prev', 'Next'],
      ///
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,

      //
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 3
        }
      },
      nav: true
    }
    
    // ====================OWL CAROUSEL only images ENDS==============================================
  //===========================================================================================  
    // =====================OWL CAROUSEL only CARDS================================================
    customOptionsCards: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 300,
      navText: ['Prev', 'Next'],
/////////autoplay///////////////
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,

      ////////////////
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 5
        }
      },
      nav: true
    }
    
    // ====================OWL CAROUSEL only CARDS ENDS==============================================
  //==============================================================================================
  ////========================DRAG AND DROP images/files and functions//=================//////////////
files: File[] = [];
minImageLimit:number=2;
maxImageLimit:number=5;
fileErr:boolean=false;//

 onSelect(event) {
  if((this.files.length<this.maxImageLimit) ){             
    console.log(event);
    this.files.push(...event.addedFiles);                
      }
    }

onRemove(event) {   
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

uploadImage(){ 
  if((this.files.length<=this.minImageLimit)&&(this.files.length>=this.maxImageLimit)){
   console.log("Images uploaded successfully"); 
   this.fileErr=false;  //to disappear  error message 
    }else{
        this.fileErr=true;// show error  message
    }   
  }
///==== ======================DRAG AND DROP IMAGES ENDS============================= =====//
// =================================================================================================
// ============================MULTICHECK BOXES============================================================================
/////////Function to check multicheckbox event, according to it we are using push and removeAt method  to add control/or remove control
multipleCheckbox(event){
  //console.log(event.target.value);
  let index =this.selectMultipleCheckboxes.indexOf(event.target.value);
  if(index==-1){
    this.selectMultipleCheckboxes.push(event.target.value);
    this.selectMultipleCheckboxesTouch=1;
   this.arrMultiCheckbox.push(new FormControl(event.target.value))
  }
  else{
    this.selectMultipleCheckboxes.splice(index,1)
    this.arrMultiCheckbox.removeAt(index);
  }
  console.log(this.selectMultipleCheckboxes);    
}
/////////////////multipleCheckbox() ends here //////////////
// ==========================================================================================
  //======================GET and SET methods=============================================
  get arrMultiCheckbox():FormArray{
    return this.reusableComponentform.get('arrMultiCheckbox') as FormArray;
  }
  get value():NameEmailAgeValues{
    return this.reusableComponentform.value;
  }

  set value(value:NameEmailAgeValues){
    this.reusableComponentform.setValue(value);
    this.onChange(value);
    this.onTouched();
  }
// ===========================get and set methods ends=====================================
// ==================================================================================================

  constructor(private fb:FormBuilder) {
    //creating inner blank form and dynmically adding form controls according to requirements
    this.reusableComponentform=this.fb.group({         
           //dynamically adding formcontrolname
     });        
    
     this.subscriptions.push(
      this.reusableComponentform.valueChanges.subscribe(value =>{
        this.onChange(value);
        this.onTouched();
      })
     );

  }//constructor ends

///////////////////////////////table2////////////////////////
deleteTable2ColumnOnClick(){

}
addTableRowFormGroup():FormGroup{
  return this.fb.group({
    row:['row']
  });
}
addTable2RowOnClick(){
  (<FormArray>this.reusableComponentform.get('table2Row')).push(this.addTableRowFormGroup());
}
addTableColFormGroup():FormGroup{
  return this.fb.group({
    column:['column']
  });
}
addTable2ColumnOnClick():void{
 (<FormArray>this.reusableComponentform.get('table2Col')).push(this.addTableColFormGroup());
 this.addTable2RowOnClick();

}
///////////////////////////////table2/ ends///////////////////////


  //=======================ADD form CONTROL FUNCTION/ ===================================
  addFormControl(myFormControlName:string,validationArr){    
      this.reusableComponentform.addControl(myFormControlName,new FormControl());   //adding controls   
    //  console.log(this.myObj);      
    this.addValidation(myFormControlName,validationArr);
    
  }  ////////////////ADDING FORMCONTROL FUNCTION ENDS///////////// 

  // ==================ADDING VALIDATION===============================================================
            addValidation(myFormControlName,validationArr){
          //pushing validation to array if user requires
            if(Object.keys(validationArr).length>0){  
              const validators = new Array<ValidatorFn>();//defining array validators of type ValidatorFn
             // console.log(myFormControlName);
              
              Object.keys(validationArr).forEach((validation:string)=>{
            // console.log("we are in validation");
             
               if(validation=="required"&&validationArr.required==true){//pushing required validation to array
               validators.push(Validators.required);
              //console.log("validation req is :"+validationArr.required);
               }
               if(validation=="minLength"){//pushing minLength validation
               validators.push(Validators.minLength(parseInt(validationArr.minLength)));
              // console.log("validation minlength is :"+validationArr.minLength+"of "+_formControlName);
                                  
               } 
               if(validation=="maxLength"){//pushing maxlength validation to array
               validators.push(Validators.maxLength(parseInt(validationArr.maxLength))); 
               }
               if(validation=="emailVal"){//pushing email validation to array
               validators.push(Validators.email);
               }         
              });//forEach ends
             //Now setting validation by setvalidators function with our validators array
              this.reusableComponentform.get(myFormControlName).setValidators(validators);
              this.reusableComponentform.get(myFormControlName).updateValueAndValidity();//to update instantly
              
            } // if(Object.keys(validationArr).length>0)   ends   
            }
// =========================================================================================== 

//ngOnChanges starts here//////////////////////////
  ngOnChanges(changes: SimpleChanges): void {
    //implementing if(change) method to detect change in input field ,valid on only single input change
    //console.log("input received");
    this.myObjDummy=this.myObj;
   if(changes){ 
     for(let propertyName in changes){
      let change = changes[propertyName];
       // let current = JSON.stringify(change.currentValue);  
      if(change.currentValue){    
                
        
    //checking all the keys present in myObj received through @Input decorator     
    Object.keys(this.myObj).forEach((key:string)=>{  
      //checking key in switch case and adding formcontrol  
      switch(key){

          case "inputfield":{//checking infutfields array
            this.inputFieldFlag=true;//setting it true for template file 
            for(let i=0; i<this.myObj.inputfield.fields.length; i++){//for loop for multiple input fields depending on lenght of that array
             var inputFieldControlName=this.myObj.inputfield.fields[i].formControlName;//name of formcontrol storing in  inputfield variable  
            // console.log(inputFieldControlName);
                       
             this.addFormControl(inputFieldControlName,this.myObj.inputfield.fields[i].validation);
           }
           break;
          }

          case "selectlist":{
            this.selectListFlag=true;//setting it true for template file     
            this.addFormControl("selectlist",this.myObj.selectlist.validation);  
            break;
          }

          case "checkbox":{
            this.checkboxFlag=true;//setting it true for template file    
            this.addFormControl("checkbox",this.myObj.checkbox.validation);  
            break;
          }

          case "CKEditor":{
            this.CKEditorFlag=true;   //setting true  for template *ngIf condition        
            this.reusableComponentform.addControl('ckeditor',new FormControl('')); 
            break;
          }

          case "textarea":{
            this.textAreaFlag=true; //setting true  for template *ngIf condition
            this.addFormControl("textarea",this.myObj.textarea.validation);  

            // this.reusableComponentform.addControl('textarea',new FormControl('')); 
            break;
          }

          case "radioButton":{
            this.radioButtonFlag=true; //setting true  for template *ngIf condition   
            this.addFormControl(this.myObj.radioButton.name ,this.myObj.radioButton.validation); 
            break;
          }
          
          case "multipleCheckbox":{
            this.multipleCheckboxFlag=true; //setting true  for template *ngIf condition          
             this.reusableComponentform.addControl('arrMultiCheckbox',new FormArray([ ]));   
              break;
          }       
          
          case "dragAndDropImage":{
            this.dragAndDropFlag=true;//setting true  for template *ngIf condition   
            break;
          }
          
          case "table":{
            this.tableFlag=true; //setting true  for template   
            //storing all myStudentList keys in myTableHeading
          this.myTableRowHeading =Object.keys(this.myObj.table.list[0]); 
          break;
          }
          case "table2":{
            this.table2Flag = true; //setting true  for template   
         this.reusableComponentform.addControl('table2Col',new FormArray([ ]));   
         this.reusableComponentform.addControl('table2Row',new FormArray([ ]));  
         this.addTable2ColumnOnClick();
         this.addTable2ColumnOnClick();
         this.addTable2ColumnOnClick();
        // this.addTable2ColumnOnClick();

          // for(let i=0;i<this.reusableComponentform.controls['table2Col'].value.length;i++){
          //     this.addTable2RowOnClick();
          //   }
            
          break;
          }
          
          case "custmClasses":{
            this.applyMyCustmClasses=this.myObj.custmClasses.class1;//setting  class true  for template *ngIf condition   
          break;
          }
           
          case "dropdown":{
            this.dropdownFlag=true; //setting true  for template  
          break;
          }
          case "card":{
            this.cardFlag=true; //setting true  for template  
          break;
          }
          case "cardWithSlider":{
            this.cardWithSliderFlag=true; //setting true  for template  
          break;
          }
          case "slidingCards":{
            this.slidingCardsFlag=true; //setting true  for template  
          break;
          }
          case "owlCarouselImg":{
            this.owlCarouselImgFlag=true; //setting true  for template  
          break;
          }
          case "owlCarouselCards":{
            this.owlCarouselCardsFlag=true; //setting true  for template  
          break;
          }
         //for angular material
          case "tranItemsBetList":{
            this.tranItemsBetListFlag=true; //setting true  for template  
          break;
          }
          //my customs transfer item between lists
          case "transferItemsBetList":{
            this.itemTransferBetweenListFlag=true; //setting true  for template  
            this.reusableComponentform.addControl('itemLeft',new FormControl()); 
            this.reusableComponentform.addControl('itemRight',new FormControl()); 

          break;
          }
          case "autoComplete":{
            this.autoCompleteFlag=true; //setting true  for template  
          //  this.data=this.myObj.autoCompleteData;
          break;
          }         

          
        }//switch ends


 
  });
 
    }//IF CURRENT CHANGE ENDS HERE
    } //for(let propertyName in changes) ENDS HERE
   }// if(changes) ends here   
  }//ngOnChanges ends here
 


    ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
   }

  onChange: any = () => {};
  onTouched: any = () => {};


  writeValue(value) {
        if (value) {
           this.value = value;
        }
        if (value === null) {
          this.reusableComponentform.reset();
        }
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }



   // communicate the inner form validation to the parent form
   validate(_: FormControl) {
   // let myFormControlName=this.myObj.formControlName.name;
   //  return this.reusableComponentform.valid ? null : { myFormControlName: { valid: false } };
    return this.reusableComponentform.valid ? null : { profile: { valid: false } };
  }

 

}//class NameEmailAgeComponent ends here


