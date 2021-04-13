import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { myObjInterface } from '../name-email-age/myObjRec';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentInfoService } from '../student-info.service';

@Component({
  selector: 'app-drag-and-drop-ag-mat',
  templateUrl: './drag-and-drop-ag-mat.component.html',
  styleUrls: ['./drag-and-drop-ag-mat.component.scss']
})
export class DragAndDropAgMatComponent implements OnInit {
  shareCompDemo1: FormGroup;
  fullnameEdit: FormGroup;
  emailEditFB:FormGroup;
  phoneNoEditFB:FormGroup;
  inputFieldFB:FormGroup;
  checkboxFB:FormGroup;
  textareaFB:FormGroup;
  radioButtonsFB:FormGroup;
  addressEdit: FormGroup;
  multiCheckboxFB: FormGroup;


  editFullnameFlag: boolean=false;
 fullNameFlag: boolean=true;
 addressFlag: boolean=true;
 templateFlag: boolean=false;
 eidtFullname: boolean=false;
 editCheckboxFlag=false; 
 editRadioButtonFlag=false; 
 editRadioButtonsFlag=false; 


//////////defining object of fullname "myObjFullName" /////////////////////////////
 myObjFullName={
   inputfield:   
   {fields:[
            {label:"firstname",formControlName:"firstname",type:"text",placeholder:"please enter your firstname",validation:{required:true,maxLength:null,minLength:null}},
            {label:"lastname",formControlName:"lastname",type:"text",placeholder:"please enter your firstname",validation:{required:true,maxLength:null,minLength:null}},
   ]}
 }
 fullnameCount=1;// this count implies number of fullname
 fullnameNo:string=null;
//////////defining object of input "myObjInput" /////////////////////////////
myObjInput={
   inputfield:   
   {fields:[
            {label:"Abcd",formControlName:"input",type:"text",placeholder:"enter here",validation:{required:true,maxLength:null,minLength:null}},
   ]}
 }
 inputCount=1;// this count implies number of fullname
 inputNo:string=null;
 inputEdit:FormGroup;
 editInputFlag: boolean=false;

//////////defining object of address "myObjAdress" /////////////////////////////

 myObjAdress={
   inputfield:   
   {fields:[
            {label:"House_No",formControlName:"houseno", type:"number",  placeholder:"please enter your house no", validation:{required:true,maxLength:null,minLength:null}},
            {label:"address",formControlName:"address" , type:"text", placeholder:"please enter your address",validation:{required:true,maxLength:null,minLength:null}},
            {label:"area",formControlName:"area",  type:"text", placeholder:"please enter your area",validation:{required:true,maxLength:null,minLength:null}},
            {label:"city",formControlName:"city" , type:"text", placeholder:"please enter your city",validation:{required:true,maxLength:null,minLength:null}},
            {label:"state", formControlName:"state" ,type:"text", placeholder:"please enter your state",validation:{required:true,maxLength:null,minLength:null}},
            {label:"zip_Code",formControlName:"zipCode" , type:"number", placeholder:"please enter your zip code",validation:{required:true,maxLength:null,minLength:null}},
   ]}
 }

 editAddressFlag: boolean= false;


 addressCount=1;// this count implies number of fullname
//  address=["address1"];
 addressNo:string=null;
//////////defining object of email "myObjEmail" ////////////////////////////////
myObjEmail={
  inputfield:   
  {fields:[
           { 
             label:"Email",
             formControlName:"email",
             type:"email",
             placeholder:"please enter your email", 
             validation:{required:true,emailVal:true}},
  ]}
}
emailCount=1;
emailNo:string=null;

//////////defining object of phone no "myObjPhoneNo" ////////////////////////////////
myObjPhoneNo={
  inputfield:   
  {fields:[
           {label:"Phone no",
            formControlName:"number",
            type:"number",
            placeholder:"please enter your phone no",
            validation:{ 
                         required:true,
                         maxLength:null,
                         minLength:null
                        }
            }
          ]
   }
}
phoneNoCount = 1;
phoneNoNo:string=null;
editPhoneNoFlag=false; 

//////////defining object of phone no "myObjCheckbox" ////////////////////////////////
myObjCheckbox={
  checkbox:
  { heading:"Agree to conditions",
    validation:{required:true},
    errorMSG:"Please Agree to terms and conditions to proceed" 
  },
};
checkboxNo:string=null;
checkboxCount=1;
//////////defining object of phone no "myObjSelectList" ////////////////////////////////

myObjSelectList={
  selectlist:
          {
             listHeading:"your subjects",
             validation:{required:true},
             errorMSG:"Please select your subjects",      
             selectlistArray :[
                                {id:'English',    name:'English'    },
                                {id:'Hindi',      name:'Hindi'      },                         
                                {id:'Marathi',    name:'Marathi'    },                         
                                {id:'Mathematics',name:'Mathematics'},                         
                                {id:'Science',    name:'Science'    },                         
                                {id:'Geography',  name:'Geography'  },                         
                                {id:'Civics',     name:'Civics'     },                         
                                {id:'History',    name:'History'    },                                                                      
                              ],  
          },

};
editSelectListFlag=false;
selectListNo:string=null;
selectListCount=1;
selectListFB:FormGroup;

//////////////////TEXTAREA//////////////////////////////////////////
myObjTextarea={
  textarea:{
            heading:"My textArea",
            validation:{required:true,maxLength:null,minLength:null},
            errorMSG:"please enter your feedback"
          }
 };
  textAreaCount = 1;
  textAreaNo: string = null;
  textAreaFB:FormGroup;
  editTextareaFlag = false;
///////////////////RADIO BUTTONS//////////////////////////////////////////////////////////////            
myObjRadioButtons={
  radioButton:
    {
     heading:"Select your gender",
     validation:{required:true},
     errorMSG:"Please select your gender",
     noOfRadioButton:3,
     name:"gender",
     options:["Male","Female","Other"]
    }
  };
  radioButtonNo=1;
  radioButtonCount=1;
  ///////////////////MULTIPLE CHECKBOX///////////////////////////////////////////
  //multipleCheckbox
myObjMultiCheckbox={
    multipleCheckbox:
    {
      heading:"Choose your Favourite fruits",
      validation:{required:true},
      errorMSG:"Please select at least one option",
      items:["oranges","banana","gauva","grapes","apple","mango"]
    } 
 };
 multiCheckboxCount=1;
 multiCheckboxNo:string=null;
 editMultiCheckboxFlag=false; 


//////////////////////////////
////////////////////table2/////////////////
myObjTable2={
  table2:{}
}
table2Count=0;
/////////////////////////////
myObjTransferItemsBetList={
  transferItemsBetList:{}
}
myTransferItemsBetListCount=1;
// ======================================== 
myObjOwlCarouselImg={
  owlCarouselImg:[
    {id:1,title:"Pasta",descriptiom:"World class manchurian",image:"../../assets/images/plate-1.png",alt:"image not found"},
    {id:2,title:"Omlet",descriptiom:"World class omlet",image:"../../assets/images/plate-2.png",alt:"image not found"},
    {id:3,title:"paneer",descriptiom:"World class paneer",image:"../../assets/images/plate-3.png",alt:"image not found"}, 
    {id:4,title:"Pasta",descriptiom:"World class paneer",image:"../../assets/images/plate-1.png",alt:"image not found"}, 
    {id:5,title:"Omlet",descriptiom:"World class paneer",image:"../../assets/images/plate-2.png",alt:"image not found"}, 
    {id:6,title:"paneer",descriptiom:"World class paneer",image:"../../assets/images/plate-3.png",alt:"image not found"}, 
  ]
};
owlCarouselImgCount=0;
owlImageCarouselFB:FormGroup;
editOwlImageCarouselFlag=false;
imageCarouselNo=null;

myObjOwlCarouselCards={
owlCarouselCards:[
  {id:1,title:"Pasta",descriptiom:"World class manchurian",image:"../../assets/images/plate-1.png",alt:"image not found"},
  {id:2,title:"Omlet",descriptiom:"World class omlet",image:"../../assets/images/plate-2.png",alt:"image not found"},
  {id:3,title:"paneer",descriptiom:"World class paneer",image:"../../assets/images/plate-3.png",alt:"image not found"}, 
  {id:4,title:"yogurt",descriptiom:"World class paneer",image:"../../assets/images/yogurt.png",alt:"image not found"}, 
  {id:5,title:"vegies",descriptiom:"World class paneer",image:"../../assets/images/vegies.png",alt:"image not found"}, 
  {id:6,title:"salad",descriptiom:"World class paneer",image:"../../assets/images/salad-table.jpg",alt:"image not found"}, 
  {id:7,title:"rasberry",descriptiom:"World class paneer",image:"../../assets/images/rasberry.png",alt:"image not found"}, 
]
};
owlCarouselCardsCount=1;


myObjAutoComplete={
autoComplete:{
  data : [
          {id: 1,name: 'Usa'},
          {id: 2,name: 'England'},
          {id: 3,name: 'India'},
          {id: 4,name: 'pakistan'},
          {id: 5,name: 'Bhutan'},
          {id: 6,name: 'Bangladesh'},
          {id: 7,name: 'Nepal'},
          {id: 8,name: 'germany'},
          {id: 9,name: 'france'},
          {id: 10,name: 'italy'},
          {id: 11,name: 'mexico'},
          {id: 12,name: 'canada'},
          {id: 13,name: 'china'},
          {id: 14,name: 'japan'},
          {id: 15,name: 'russia'},
        ],
 placeholder:"enter your country", 
}
}
autoCompleteCount=1;
/////////////cards//////////////////
 ///cards//////////////////
 myObjCard={
  card:{
    image:"../../../assets/images/1514540411738.jpg",
    title:"hello",
    description:"Welcome to our store"
  }
}
cardsCount=1;
//////////////cards///////////////////////////
myObjDragAndDropImage={
  dragAndDropImage:{ }, //this key "dragAnddrop" will tell reusable component to use dragAnddrop code to run
};
dragAndDropImageCount=1;
//ckeEditor
myObjCKEditor={
  CKEditor:{},
};
ckeditorCount=1;
//dropdown
myObjDropdown={
 dropdown:
          { heading:"My Dropdown heading",
            items:[{item:"monday"},
                    {item:"tuesday"},
                    {item:"wednesday"},
                    {item:"thursday"},
                    {item:"friday"},
                    {item:"saturday"}],
dropDownRoutLinks:[{link:"/home"},
                   {link:"/tuesday"},
                   {link:"/wednesday"},
                   {link:"/thursday"},
                   {link:"/friday"},
                   {link:"/saturday"}]
}};
dropDownCount=1;
/////////////////// OBJECTS of components ENDS HERE/////////////////////////////////////////
//==============================================================================================


////////////////DRAG AND DROP WITH  SORTING EFFECT///////////////////////////////////
//dragItems contains 

dragItems:{formControl:string, myObj:myObjInterface, type:string}[]
          =[
            {formControl:"fullname1",        myObj:this.myObjFullName,      type:"fullname"},
            {formControl:"multipleCheckbox1",myObj:this.myObjMultiCheckbox, type:"multiCheckbox"},         
            {formControl:"address1",         myObj:this.myObjAdress,        type:"address"},         
            {formControl:"email1",           myObj:this.myObjEmail,         type:"email"},         
            {formControl:"phoneNo1",         myObj:this.myObjPhoneNo,       type:"phoneNo"},         
            {formControl:"checkbox1",        myObj:this.myObjCheckbox,      type:"checkbox"},         
            {formControl:"selectList1",      myObj:this.myObjSelectList,    type:"selectList"},         
            {formControl:"textarea1",        myObj:this.myObjTextarea,      type:"textArea"},         
            {formControl:"radiobuttons1",    myObj:this.myObjRadioButtons,  type:"radioButton"},         
            {formControl:"table",            myObj:this.myObjTable2,        type:"table"},         
            {formControl:"listItems",        myObj:this.myObjTransferItemsBetList, type:"transferItemsBetList"},         
          ];
  currentItem: any;//this object will hold current item to edit(from edit() fumction)
  editEmailFlag: boolean;
 //we are using angular material drag and drop list transfer and sorting effect
  //todo is component/items to drag i.e. present on left side navbar
  todo = [
    "Fullname",
    "Address",
    "Email",
    "Contact No",
    "Input",
    "CheckBox",
    "SelectList",
    "RadioButtons",
    "MultipleCheckbox",  
    "TextArea",  
    "Table2",       
    "DropDown",       
    "CKEditor",       
    "ImageDragAndDrop",       
    "Cards",       
    "Dual list",       
    "Auto Complete",       
    "Carousel Cards",       
    "Carousel Images",         

  ];

  done = [
  
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      if(event.previousContainer.id == "cdk-drop-list-1"){//move in array available only for components //not for sidenavbar
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } 
      
    } else {
         if (event.previousContainer.id == "cdk-drop-list-0") {   //transfer items between sidenavbar to components only   
                        let temp = event.previousContainer.data[event.previousIndex];     
                        
                        switch(temp){
                          case "Fullname":{
                            this.addComponent("fullname",event.currentIndex);
                            break;
                          }
                          case "Address":{
                            this.addComponent("address",event.currentIndex);
                            break;
                          }
                          case "Contact No":{
                            this.addComponent("phoneNo",event.currentIndex);
                            break;
                          }
                          case "Input":{
                            this.addComponent("input",event.currentIndex);
                            break;
                          }
                          case "Email":{
                            this.addComponent("email",event.currentIndex);
                            break;
                          }
                          case "CheckBox":{
                            this.addComponent("checkbox",event.currentIndex);
                            break;
                          }
                          case "SelectList":{
                            this.addComponent("selectList",event.currentIndex);
                            break;
                          }
                          case "MultipleCheckbox":{
                            this.addComponent("multiCheckbox",event.currentIndex);
                            break;
                          }
                          case "CheckBox":{
                            this.addComponent("checkbox",event.currentIndex);
                            break;
                          }
                          case "RadioButtons":{
                            this.addComponent("radioButton",event.currentIndex);
                            break;
                          }
                          case "TextArea":{
                            this.addComponent("textArea",event.currentIndex);
                            break;
                          }
                          case "RadioButton":{
                            this.addComponent("radioButton",event.currentIndex);
                            break;
                          }
                          case "DropDown":{
                            this.addComponent("dropDown",event.currentIndex);
                            break;
                          }
                          case "Table2":{
                            this.addComponent("table2",event.currentIndex);
                            break;
                          }
                          case "CKEditor":{
                            this.addComponent("ckeditor",event.currentIndex);
                            break;
                          }
                          case "Auto Complete":{
                            this.addComponent("autoComplete",event.currentIndex);
                            break;
                          }
                          case "ImageDragAndDrop":{
                            this.addComponent("imageDragAndDrop",event.currentIndex);
                            break;
                          }
                          case "Cards":{
                            this.addComponent("cards",event.currentIndex);
                            break;
                          }
                          case "Dual list":{
                            this.addComponent("transferItemsBetList",event.currentIndex);
                            break;
                          }
                          case  "Carousel Cards":{
                            this.addComponent("owlCarouselCards",event.currentIndex);
                            break;
                          }
                          case "Carousel Images":{
                            this.addComponent("owlCarouselImages",event.currentIndex);
                            break;
                          }
                        
                        }
          
        this. todo = [
          "Fullname",
          "Address",
          "Email",
          "Contact No",
          "Input",
          "CheckBox",
          "SelectList",
          "RadioButtons",
          "MultipleCheckbox",  
          "TextArea",  
          "Table2",       
          "DropDown",       
          "CKEditor",       
          "ImageDragAndDrop",       
          "Cards",       
          "Dual list",       
          "Auto Complete",       
          "Carousel Cards",       
          "Carousel Images", 
        ];

     }
    } 
  }//drop function ends
  
 fullnameSel: boolean;
 constructor(private fb:FormBuilder, 
            private myService:StudentInfoService,
            private _router:Router) {  }

 ngOnInit(): void {
    this.shareCompDemo1=this.fb.group({
  
     
      });
      // for editing fullname
      this.fullnameEdit=this.fb.group({
     firstname:[],
     firstnamePlaceholder:[],
     lastname:[],   
     lastnamePlaceholder:[],   
     firstnameRequired:[],
     lastnameRequired:[],   
     firstnameMinlength:[],   
     firstnameMaxlength:[],   
     lastnameMinlength:[],   
     lastnameMaxlength:[],  
    //  id:[]        
      });
      // for editing fullname
      this.inputEdit=this.fb.group({
     label:[],
     placeholder:[],
     type:[],   
     required:[],   
     minlength:[],   
     maxlength:[],   
      });
      // for editing address
      this.addressEdit=this.fb.group({ 
        addressRequired:[],
        houseNo:[],
        address:[],
        area:[],
        city:[],
        state:[],
        zipCode:[],

        houseNoPlaceholder:[],
        addressPlaceholder:[],
        areaPlaceholder:[],
        cityPlaceholder:[],
        statePlaceholder:[],
        zipCodePlaceholder:[],        
      });
      ///for editing email///////
      this.emailEditFB=this.fb.group({
        label:[],
        required:[],
        emailValid:[],
        placeholder:[],  
      });
      ///for editing phone no///////
      this.phoneNoEditFB=this.fb.group({
        label:[],
        required:[],
        placeholder:[],  
      });
      this.textareaFB=this.fb.group({
        heading:[],
        required:[],
        minLength:[],
        maxLength:[],
        errorMSG:[],  
      });
      ///for editing checkbox no///////
      this.checkboxFB=this.fb.group({
        heading:[],
        required:[],
        errorMSG:[],  
      });
      ///for editing radio button no///////
      this.radioButtonsFB=this.fb.group({
        heading:[],
        required:[],
        errorMSG:[],  
        name:[],  
        radioButtons:this.fb.array([
        // this.addRadioButtonsFormGroup(),
        ])
      });  
      ///for editing multi checkbox no///////
      this.multiCheckboxFB=this.fb.group({
        heading:[],
        required:[],
        errorMSG:[],          
        checkboxes:this.fb.array([
        // this.addMultiCheckboxFormGroup(),
        ])
      });
      this.selectListFB=this.fb.group({
        heading:[],
        required:[],
        errorMSG:[],          
        selectListItems:this.fb.array([
        // this.addRadioButtonsFormGroup(),
        ])
      });
      ///OWL image carousel
      this.owlImageCarouselFB=this.fb.group({
        images:this.fb.array([
                  
      ])
      });

 }//ngOnInit  ends
 ////////////RADIOBUTTON FORM ARRAY/////////////////////
 addRadioButtonsFormGroup():FormGroup{
   return this.fb.group({
     radioButton:['',Validators.required]
   });
 }
 addRadioButtonsOnClick():void{
  (<FormArray>this.radioButtonsFB.get('radioButtons')).push(this.addRadioButtonsFormGroup());
 }
 ////////////RADIOBUTTON FORM ARRAY ends//////////////////////////

 //////////OWL IMAGE FORM ARRAY//////////////////
 addOwlImageFormGroup():FormGroup{
  return this.fb.group({
    title:[],
    descriptiom:[],
    imageSrc:[],          
    alt:[],
  });
}
addOwlImageOnClick():void{
 (<FormArray>this.owlImageCarouselFB.get('images')).push(this.addOwlImageFormGroup());
}
 //////////MULTI CHECKBOXES FORM ARRAY ends//////////////////
 //////////MULTI CHECKBOXES FORM ARRAY//////////////////
 addMultiCheckboxFormGroup():FormGroup{
  return this.fb.group({
    checkbox:[]
  });
}
addMultiCheckboxOnClick():void{
 (<FormArray>this.multiCheckboxFB.get('checkboxes')).push(this.addMultiCheckboxFormGroup());
}
 //////////MULTI CHECKBOXES FORM ARRAY ends//////////////////
 //////////select list items FORM ARRAY//////////////////
 addSelectListItemsFormGroup():FormGroup{
  return this.fb.group({
    item:[]
  });
}
addSelectListItemsOnClick():void{
 (<FormArray>this.selectListFB.get('selectListItems')).push(this.addSelectListItemsFormGroup());
}
 //////////select list items FORM ARRAY ends//////////////////

 //function to close all edit sidebars
 closeEditSidebars(){
  this.editAddressFlag = false;
  this.editFullnameFlag=false; 
  this.editEmailFlag=false; 
  this.editPhoneNoFlag=false; 
  this.editCheckboxFlag=false; 
  this.editSelectListFlag=false; 
  this.editTextareaFlag=false; 
  this.editRadioButtonFlag=false; 
  this.editMultiCheckboxFlag=false; 
  this.editRadioButtonsFlag=false; 
  this.editOwlImageCarouselFlag=false; 
   
 }

 //EDIT ANY COMPONENT//////////////
 edit(item){
this.currentItem=item;//assigning  item that we received to currentItem ,this will be used for setting values
  switch(item.type){
   case "fullname":{
    this.editingFullname(item);
    break;
  }
  case "address":{
    this.editingAddress(item);
    break;
  }
  case "email":{
    this.editingEmail(item);
    break;
  }
  case "phoneNo":{
    this.editPhoneNo(item);
    break;
  }
  case "checkbox":{
    this.editCheckbox(item);
    break;
  }
  case "input":{
    this.editingInput(item);
    break;
  }
  case "radioButton":{
   this.editRadioButtons(item);
    break;
  }
  case "selectList":{
   this.editSelectList(item);
    break;
  }
  case "textArea":{
    this.editTextArea(item);
    break;
  }
  case "multiCheckbox":{
    this.editMultiCheckbox(item);
    break;
  }
  case "table":{
   //// this.editingAddress(item);
    break;
  }
  case "imageDragAndDrop":{
   //// this.editingAddress(item);
    break;
  }
  case "cards":{
    //this.editingAddress(item);
    break;
  }
  case "owlCarouselImages":{
    this.editOwlImageCarousel(item);
    break;
  }
  case "owlCarouselCards":{
   // this.editingAddress(item);
    break;
  }
  case "autoComplete":{
    //this.editingAddress(item);
    break;
  }
  case "dualListBox":{
    //this.editingAddress(item);
    break;
  }
  }  
 }
 //////////////////////////////////////
 // ===============================EDIT function ends ===========================================
//  ******************************************************************************************************
// ===============================EDITING FULLNAME STARTS===========================================
 editingFullname(item){
  this.closeEditSidebars();//closing any edit sidebar, if opened
  this.editFullnameFlag=true; 

  this.fullnameNo=item.formControl;// to know which fullname you are editing,
                                    //  this will be displayed on edit sidebar
//console.log(item.myObj.inputfield.fields[0].label);

 ///setting values
  this.fullnameEdit.setValue({
   firstnameRequired : item.myObj.inputfield.fields[0].validation.required,
   firstname :         item.myObj.inputfield.fields[0].label,
   lastnameRequired :  item.myObj.inputfield.fields[1].validation.required,   
   lastname :          item.myObj.inputfield.fields[1].label,        
   firstnameMinlength: item.myObj.inputfield.fields[0].validation.minLength,   
   firstnameMaxlength: item.myObj.inputfield.fields[0].validation.maxLength,   
   lastnameMinlength:  item.myObj.inputfield.fields[1].validation.minLength,   
   lastnameMaxlength:  item.myObj.inputfield.fields[1].validation.maxLength,
   firstnamePlaceholder:item.myObj.inputfield.fields[0].placeholder,
   lastnamePlaceholder:item.myObj.inputfield.fields[1].placeholder,   
 })
 } 
 setFullname(){
  // this.dragItems.indexOf(this.currentItem);
  let index = this.dragItems.indexOf(this.currentItem);  
 
  //creating dummy or temporary object to assign
 let  myObjFullNameDummy={
  inputfield:   
  {fields:[
           {label:"firstname",formControlName:"firstname",type:"text",placeholder:"please enter your firstname",validation:{required:true,maxLength:null,minLength:null}},
           {label:"lastname",formControlName:"lastname",type:"text",placeholder:"please enter your firstname",validation:{required:true,maxLength:null,minLength:null}},
  ]}
}
 
 
  myObjFullNameDummy.inputfield.fields[0].label=this.fullnameEdit.get('firstname').value;
  myObjFullNameDummy.inputfield.fields[0].placeholder=this.fullnameEdit.get('firstnamePlaceholder').value;
  myObjFullNameDummy.inputfield.fields[0].validation.required=this.fullnameEdit.get('firstnameRequired').value;
  myObjFullNameDummy.inputfield.fields[0].validation.minLength=this.fullnameEdit.get('firstnameMinlength').value;
  myObjFullNameDummy.inputfield.fields[0].validation.maxLength=this.fullnameEdit.get('firstnameMaxlength').value;
  myObjFullNameDummy.inputfield.fields[1].label=this.fullnameEdit.get('lastname').value;
  myObjFullNameDummy.inputfield.fields[1].placeholder=this.fullnameEdit.get('lastnamePlaceholder').value;
  myObjFullNameDummy.inputfield.fields[1].validation.required=this.fullnameEdit.get('lastnameRequired').value;
  myObjFullNameDummy.inputfield.fields[1].validation.maxLength=this.fullnameEdit.get('lastnameMaxlength').value;
  myObjFullNameDummy.inputfield.fields[1].validation.minLength=this.fullnameEdit.get('lastnameMinlength').value;
  

  // console.log(this.dragItems[index].myObj,"before setting");  
  // this.dragItems[index].myObj = this.myObjFullNameDummy;

  this.dragItems[index].myObj = myObjFullNameDummy;
  // console.log(this.myObjFullNameDummy);

  // console.log(this.dragItems[index].myObj,"after setting");  
  // consolse.log(this.dragItems[index].myObj);
  
  this.editFullnameFlag=false; 

 } 
// ===============================EDITING FULLNAME ENDS===========================================
//  ******************************************************************************************************
// ===============================EDITING INPUT STARTS===========================================
editingInput(item){
  this.closeEditSidebars();//closing any edit sidebar, if opened
  this.editInputFlag=true; 

  this.inputNo=item.formControl;// to know which fullname you are editing,
                                    //  this will be displayed on edit sidebar
//console.log(item.myObj.inputfield.fields[0].label);

 ///setting values
  this.inputEdit.setValue({
   required   : item.myObj.inputfield.fields[0].validation.required,
   label      : item.myObj.inputfield.fields[0].label,
   type       : item.myObj.inputfield.fields[0].type,
   minlength  : item.myObj.inputfield.fields[0].validation.minLength,   
   maxlength  : item.myObj.inputfield.fields[0].validation.maxLength,   
   placeholder: item.myObj.inputfield.fields[0].placeholder,
 })
 } 
 setInput(){
  // this.dragItems.indexOf(this.currentItem);
  let index = this.dragItems.indexOf(this.currentItem);  
 
  //creating dummy or temporary object to assign
 let  myObjInputTemp={
  inputfield:   
  {fields:[
           {label:"Abcd",formControlName:"input",type:"text",placeholder:"enter here",validation:{required:true,maxLength:null,minLength:null}},
  ]}
}
 
 
  myObjInputTemp.inputfield.fields[0].label=this.inputEdit.get('label').value;
  myObjInputTemp.inputfield.fields[0].type=this.inputEdit.get('type').value;
  myObjInputTemp.inputfield.fields[0].placeholder=this.inputEdit.get('placeholder').value;
  myObjInputTemp.inputfield.fields[0].validation.required=this.inputEdit.get('required').value;
  myObjInputTemp.inputfield.fields[0].validation.minLength=this.inputEdit.get('minlength').value;
  myObjInputTemp.inputfield.fields[0].validation.maxLength=this.inputEdit.get('maxlength').value;

  

  // console.log(this.dragItems[index].myObj,"before setting");  
  // this.dragItems[index].myObj = this.myObjInputTemp;

  this.dragItems[index].myObj = myObjInputTemp;
  // console.log(this.myObjFullNameDummy);

  // console.log(this.dragItems[index].myObj,"after setting");  
  // consolse.log(this.dragItems[index].myObj);
  
  this.editInputFlag=false; 

 } 
// ===============================EDITING INPUT ENDS===========================================
// ******************************************************************************************************
// ===============================EDITING ADDRESS STARTS===========================================
 editingAddress(item){
    this.closeEditSidebars();
      this.editAddressFlag = true;
    
    this.addressNo = item.formControl;// to know which address you are editing,
                                      //  this will be displayed on edit sidebar

    this.addressEdit.setValue({
      addressRequired:true,
      houseNo : item.myObj.inputfield.fields[0].label,
      address : item.myObj.inputfield.fields[1].label,
      area : item.myObj.inputfield.fields[2].label,
      city : item.myObj.inputfield.fields[3].label,
      state : item.myObj.inputfield.fields[4].label,
      zipCode : item.myObj.inputfield.fields[5].label,

      houseNoPlaceholder: item.myObj.inputfield.fields[0].placeholder,
      addressPlaceholder: item.myObj.inputfield.fields[1].placeholder,
      areaPlaceholder: item.myObj.inputfield.fields[2].placeholder,
      cityPlaceholder: item.myObj.inputfield.fields[3].placeholder,
      statePlaceholder: item.myObj.inputfield.fields[4].placeholder,
      zipCodePlaceholder: item.myObj.inputfield.fields[5].placeholder,
    })
  
 }
 setAddress(){

  let index = this.dragItems.indexOf(this.currentItem);

   //defining temporary address objrct for data transfering ,modification etc
let  myObjAdressTemp={
  inputfield:   
  {fields:[
           {label:"House_No",formControlName:"houseno", type:"number",  placeholder:"please enter your house no", validation:{required:true,maxLength:null,minLength:null}},
           {label:"address",formControlName:"address" , type:"text", placeholder:"please enter your address",validation:{required:true,maxLength:null,minLength:null}},
           {label:"area",formControlName:"area",  type:"text", placeholder:"please enter your area",validation:{required:true,maxLength:null,minLength:null}},
           {label:"city",formControlName:"city" , type:"text", placeholder:"please enter your city",validation:{required:true,maxLength:null,minLength:null}},
           {label:"state", formControlName:"state" ,type:"text", placeholder:"please enter your state",validation:{required:true,maxLength:null,minLength:null}},
           {label:"zip_Code",formControlName:"zipCode" , type:"number", placeholder:"please enter your zip code",validation:{required:true,maxLength:null,minLength:null}},
  ]}
}
  //if user wants address fields to are required then setting it to true else false
  if(this.addressEdit.get('addressRequired').value == true){
   for(let i=0;i<myObjAdressTemp.inputfield.fields.length;i++){
       myObjAdressTemp.inputfield.fields[i].validation.required = true;
   }
  }else{
    for(let i=0;i<(myObjAdressTemp.inputfield.fields.length);i++){
      myObjAdressTemp.inputfield.fields[i].validation.required = false;
     }
   }
  
  myObjAdressTemp.inputfield.fields[0].label=this.addressEdit.get('houseNo').value;
  myObjAdressTemp.inputfield.fields[1].label=this.addressEdit.get('address').value;
  myObjAdressTemp.inputfield.fields[2].label=this.addressEdit.get('area').value;
  myObjAdressTemp.inputfield.fields[3].label=this.addressEdit.get('city').value;
  myObjAdressTemp.inputfield.fields[4].label=this.addressEdit.get('state').value;
  myObjAdressTemp.inputfield.fields[5].label=this.addressEdit.get('zipCode').value;

  myObjAdressTemp.inputfield.fields[0].placeholder=this.addressEdit.get('houseNoPlaceholder').value;
  myObjAdressTemp.inputfield.fields[1].placeholder=this.addressEdit.get('addressPlaceholder').value;
  myObjAdressTemp.inputfield.fields[2].placeholder=this.addressEdit.get('areaPlaceholder').value;
  myObjAdressTemp.inputfield.fields[3].placeholder=this.addressEdit.get('cityPlaceholder').value;
  myObjAdressTemp.inputfield.fields[4].placeholder=this.addressEdit.get('statePlaceholder').value;
  myObjAdressTemp.inputfield.fields[5].placeholder=this.addressEdit.get('zipCodePlaceholder').value;
 
  this.dragItems[index].myObj = myObjAdressTemp;// transfering data whatever we have modified

  this.editAddressFlag = false; //close editing address
 }
// ===============================EDITING ADDRESS ENDS===========================================//
//*************************************************************************************************** *
// ===============================EDITING EMAIL STARTS===========================================
editingEmail(item){
  this.closeEditSidebars();
  this.editEmailFlag=true; 

  this.emailNo=item.formControl;// to know which fullname you are editing,
                                    //  this will be displayed on edit sidebar

 ///setting values
  this.emailEditFB.setValue({
    
   required   : item.myObj.inputfield.fields[0].validation.required,
   emailValid : item.myObj.inputfield.fields[0].validation.emailVal,
   label      : item.myObj.inputfield.fields[0].label,
   placeholder: item.myObj.inputfield.fields[0].placeholder,   
  });
}
setEmail(){
  // this.dragItems.indexOf(this.currentItem);
  let index = this.dragItems.indexOf(this.currentItem);  
 
  //creating dummy or temporary object to assign
 let myObjEmailTemp={
    inputfield:   
    {fields:[
             {label:"Email",formControlName:"email",type:"email", placeholder:"please enter your email",  validation:{required:true,emailVal:true}},
    ]}
  }
 
 //asigning values that we received through user
  myObjEmailTemp.inputfield.fields[0].validation.required=this.emailEditFB.get('required').value;
  myObjEmailTemp.inputfield.fields[0].validation.emailVal=this.emailEditFB.get('emailValid').value; 
  myObjEmailTemp.inputfield.fields[0].label=this.emailEditFB.get('label').value;
  myObjEmailTemp.inputfield.fields[0].placeholder=this.emailEditFB.get('placeholder').value;
  

  // console.log(this.dragItems[index].myObj,"before setting");  
  // this.dragItems[index].myObj = this.myObjEmailTemp;

  this.dragItems[index].myObj = myObjEmailTemp;
  // console.log(this.myObjFullNameDummy);

  
  this.editEmailFlag=false; //closing email editing
 } 
// ===============================EDITING EMAIL ENDS===========================================
//********************************************************************************************* */
//*************************************************************************************************** *
// ===============================EDITING PHONE NO STARTS===========================================
editPhoneNo(item){
  this.closeEditSidebars();//closing all edit sidebar 

  this.editPhoneNoFlag=true; //opening only phone_no edit sidebar

  this.phoneNoNo=item.formControl;// to know which fullname you are editing,
                                    //  this will be displayed on edit sidebar
console.log("hi");

 ///setting values
  this.phoneNoEditFB.setValue({
    
   required   : item.myObj.inputfield.fields[0].validation.required,
   label      : item.myObj.inputfield.fields[0].label,
   placeholder: item.myObj.inputfield.fields[0].placeholder,   
  });
}
setPhoneNo(){
  // this.dragItems.indexOf(this.currentItem);
  let index = this.dragItems.indexOf(this.currentItem);  
 
  //creating dummy or temporary object to assign
 let  myObjPhoneNoTemp={
    inputfield:   
    {fields:[
             {label:"Phone no",formControlName:"number",type:"number",placeholder:"please enter your phone no", validation:{required:true,maxLength:null,minLength:null}},
    ]}
  }
 
 //asigning values that we received through user
 myObjPhoneNoTemp.inputfield.fields[0].validation.required=this.phoneNoEditFB.get('required').value;
 myObjPhoneNoTemp.inputfield.fields[0].label=this.phoneNoEditFB.get('label').value;
 myObjPhoneNoTemp.inputfield.fields[0].placeholder=this.phoneNoEditFB.get('placeholder').value;
  

  // console.log(this.dragItems[index].myObj,"before setting");  
  // this.dragItems[index].myObj = this.myObjEmailTemp;

  this.dragItems[index].myObj = myObjPhoneNoTemp;
  // console.log(this.myObjFullNameDummy);

  
  this.closeEditSidebars();//closing all edit sidebar 
 }
// ===============================EDITING PHONE NO ENDS===========================================
//********************************************************************************************* */
//*************************************************************************************************** *
// ===============================EDITING PHONE NO STARTS===========================================
editTextArea(item){
  this.closeEditSidebars();//closing all edit sidebar 

  this.editTextareaFlag=true; //opening only phone_no edit sidebar

  this.textAreaNo=item.formControl;// to know which fullname you are editing,
                                    //  this will be displayed on edit sidebar

 ///setting values
  this.textareaFB.setValue({
    
   required   : item.myObj.textarea.validation.required,
   minLength  : item.myObj.textarea.validation.minLength,
   maxLength  : item.myObj.textarea.validation.maxLength,
   heading    : item.myObj.textarea.heading,
   errorMSG   : item.myObj.textarea.errorMSG,
    
  });
}
setTextArea(){
  // this.dragItems.indexOf(this.currentItem);
  let index = this.dragItems.indexOf(this.currentItem);  
 
  //creating dummy or temporary object to assign
 let  myObjTextareaTemp={
  textarea:{
            heading:"My textArea",
            validation:{required:true,maxLength:null,minLength:null},
            errorMSG:"please enter your feedback"
          }
 };
 
 //asigning values that we received through user
 myObjTextareaTemp.textarea.validation.required=this.textareaFB.get('required').value;
 myObjTextareaTemp.textarea.validation.minLength=this.textareaFB.get('minLength').value;
 myObjTextareaTemp.textarea.validation.maxLength=this.textareaFB.get('maxLength').value;
 myObjTextareaTemp.textarea.heading=this.textareaFB.get('heading').value;
 myObjTextareaTemp.textarea.errorMSG=this.textareaFB.get('errorMSG').value;


  this.dragItems[index].myObj = myObjTextareaTemp;

  
  this.closeEditSidebars();//closing all edit sidebar 
 }
// ===============================EDITING PHONE NO ENDS===========================================
//********************************************************************************************* */
//*************************************************************************************************** *
// ===============================EDITING CHECKBOX STARTS===========================================
editCheckbox(item){
  this.closeEditSidebars();//closing all edit sidebar 

  this.editCheckboxFlag=true; //opening only phone_no edit sidebar

  this.checkboxNo=item.formControl;// to know which fullname you are editing,
                                    //  this will be displayed on edit sidebar


 ///setting values
  this.checkboxFB.setValue({    
   required  : item.myObj.checkbox.validation.required,
   heading   : item.myObj.checkbox.heading,
   errorMSG  : item.myObj.checkbox.errorMSG,      
  });
}
setCheckbox(){
  // this.dragItems.indexOf(this.currentItem);
  let index = this.dragItems.indexOf(this.currentItem);  
 
  //creating dummy or temporary object to assign
  let myObjCheckboxTemp={
    checkbox:
    { heading:"Agree to conditions",validation:{required:true},
      errorMSG:"Please Agree to terms and conditions to proceed" },
  };
 
 //asigning values that we received through user
 myObjCheckboxTemp.checkbox.validation.required=this.checkboxFB.get('required').value;
 myObjCheckboxTemp.checkbox.heading=this.checkboxFB.get('heading').value;
 myObjCheckboxTemp.checkbox.errorMSG=this.checkboxFB.get('errorMSG').value;
  
  this.dragItems[index].myObj = myObjCheckboxTemp;

  
  this.closeEditSidebars();//closing all edit sidebar 
 }
// ===============================EDITING checkbox ENDS===========================================
//********************************************************************************************* */
//*************************************************************************************************** *
// ===============================EDITING RADIO-BUTTONS STARTS===========================================
deleteRadioButton(i){
const item = <FormArray>this.radioButtonsFB.controls['radioButtons'];
item.removeAt(i);
// this.addR
}
editRadioButtons(item){
  this.closeEditSidebars();//closing all edit sidebar 

  this.editRadioButtonsFlag=true; //opening only phone_no edit sidebar

  this.radioButtonNo=item.formControl;// to know which fullname you are editing,
                                    //  this will be displayed on edit sidebar


 ///setting values
  this.radioButtonsFB.patchValue({    
   required  : item.myObj.radioButton.validation.required,
   heading   : item.myObj.radioButton.heading,
   errorMSG  : item.myObj.radioButton.errorMSG, 
   name      : item.myObj.radioButton.name   
  });
}
setRadioButtons(){
  // this.dragItems.indexOf(this.currentItem);
  let index = this.dragItems.indexOf(this.currentItem);  
 
  //creating dummy or temporary object to assign
  let myObjRadioButtonsTemp={
    radioButton:
      {
       heading:"Select your gender",
       validation:{required:true},
       errorMSG:"Please select your gender",
       noOfRadioButton:3,
       name:"gender",
       options:[]
      }
    };
 //asigning values that we received through user
 myObjRadioButtonsTemp.radioButton.validation.required=this.radioButtonsFB.get('required').value;
 myObjRadioButtonsTemp.radioButton.heading=this.radioButtonsFB.get('heading').value;
 myObjRadioButtonsTemp.radioButton.errorMSG=this.radioButtonsFB.get('errorMSG').value;
 myObjRadioButtonsTemp.radioButton.name=this.radioButtonsFB.get('name').value;
//  console.log(this.radioButtonsFB.get('radioButtons').value.length);
 

 //pushing all radio button values user has inputed any value
 if(this.radioButtonsFB.get('radioButtons').value.length>0){
   for(let i=0;i<this.radioButtonsFB.get('radioButtons').value.length;i++){
   // console.log(this.radioButtonsFB.get('radioButtons').value[i].radioButton);
   let temp = (this.radioButtonsFB.get('radioButtons').value[i].radioButton);
   myObjRadioButtonsTemp.radioButton.options.push(temp);//pushing all value to temp object
  }
 }else{
  myObjRadioButtonsTemp.radioButton.options=["Male","Female","Other"]; 
 }  
//console.log( myObjRadioButtonsTemp.radioButton.options);
// console.log(this.radioButtonsFB.controls['radioButtons'].value.radioButton);

 this.dragItems[index].myObj = myObjRadioButtonsTemp;//copying whole temp object to myObj
  
  this.closeEditSidebars();//closing all edit sidebar 
 }
// ===============================EDITING RADIO-BUTTONS ENDS===========================================
//********************************************************************************************* */
//********************************************************************************************* */
// ===============================EDITING MULTI CHECBOXES STARTS===========================================
deleteMultiCheckbox(i){
const item = <FormArray>this.multiCheckboxFB.controls['checkboxes'];
item.removeAt(i);
// this.addR
}
editMultiCheckbox(item){
  this.closeEditSidebars();//closing all edit sidebar 

  this.editMultiCheckboxFlag=true; //opening only phone_no edit sidebar

  this.multiCheckboxNo=item.formControl;// to know which fullname you are editing,
                                    //  this will be displayed on edit sidebar


 ///setting values
  this.multiCheckboxFB.patchValue({    
   required  : item.myObj.multipleCheckbox.validation.required,
   heading   : item.myObj.multipleCheckbox.heading,
   errorMSG  : item.myObj.multipleCheckbox.errorMSG, 
  });
 
}
setMultiCheckbox(){
  // this.dragItems.indexOf(this.currentItem);
  let index = this.dragItems.indexOf(this.currentItem);  
 
  //creating dummy or temporary object to assign
  let myObjMultiCheckboxTemp={
    multipleCheckbox:
    {
      heading:"Choose your Favourite fruits",
      validation:{required:true},
      errorMSG:"Please select at least one option",
      items:[]
    } 
 };
 //asigning values that we received through user
 myObjMultiCheckboxTemp.multipleCheckbox.validation.required=this.multiCheckboxFB.get('required').value;
 myObjMultiCheckboxTemp.multipleCheckbox.heading=this.multiCheckboxFB.get('heading').value;
 myObjMultiCheckboxTemp.multipleCheckbox.errorMSG=this.multiCheckboxFB.get('errorMSG').value;

 //pushing all radio button values user has inputed 
for(let i=0;i<this.multiCheckboxFB.get('checkboxes').value.length;i++){
 // console.log(this.radioButtonsFB.get('radioButtons').value[i].radioButton);
  let temp = (this.multiCheckboxFB.get('checkboxes').value[i].checkbox);
  myObjMultiCheckboxTemp.multipleCheckbox.items.push(temp);//pushing all value to temp object
}
 
// let tempLenght = this.multiCheckboxFB.get('checkboxes').value.length;
// console.log(this.multiCheckboxFB.get('checkboxes').value);
// console.log(tempLenght);
// console.log(<FormArray>this.multiCheckboxFB.controls['checkboxes']);
//removing all form array controls
while (this.multiCheckboxFB.get('checkboxes').value.length !== 0) {
  this.deleteMultiCheckbox(0);
}
// console.log(<FormArray>this.multiCheckboxFB.controls['checkboxes']);


 this.dragItems[index].myObj = myObjMultiCheckboxTemp;//copying whole temp object to myObj
  
  this.closeEditSidebars();//closing all edit sidebar 
 }
// ===============================EDITING MULTI CHECKBOXES ENDS===========================================
//********************************************************************************************* */
//********************************************************************************************* */
//********************************************************************************************* */
// ===============================EDITING OWL IMAGE CAROUSEL STARTS===========================================
deleteOwlImageCarousel(i){
const item = <FormArray>this.owlImageCarouselFB.controls['images'];
item.removeAt(i);
// this.addR
}
editOwlImageCarousel(item){
  this.closeEditSidebars();//closing all edit sidebar 

  this.editOwlImageCarouselFlag=true; //opening only phone_no edit sidebar

  this.imageCarouselNo=item.formControl;// to know which fullname you are editing,
                                    //  this will be displayed on edit sidebar



}
setOwlImageCarousel(){
  // this.dragItems.indexOf(this.currentItem);
  let index = this.dragItems.indexOf(this.currentItem);  
    
  //creating dummy or temporary object to assign
  let myObjOwlCarouselImgTemp = {
    owlCarouselImg:[]
  }; 

 //asigning values that we received through user
for(let i=0; i<this.owlImageCarouselFB.get('images').value.length; i++){
  let image:{id:number,title:string,descriptiom:string,imageSrc:string,alt:string};
  image.id = i;
  image.title = (this.owlImageCarouselFB.get('images').value[i].title);
  image.descriptiom = (this.owlImageCarouselFB.get('images').value[i].descriptiom);
  image.imageSrc = (this.owlImageCarouselFB.get('images').value[i].imageSrc);
  image.alt = (this.owlImageCarouselFB.get('images').value[i].alt);

  myObjOwlCarouselImgTemp.owlCarouselImg.push(image);//pushing all value to temp object
}
  
 this.dragItems[index].myObj = myObjOwlCarouselImgTemp;//copying whole temp object to myObj
  
  this.closeEditSidebars();//closing all edit sidebar 
 }
// ===============================EDITING OWL IMAGE CAROUSEL ENDS===========================================
//********************************************************************************************* */
//********************************************************************************************* */
// ===============================EDITING SELECT LIST STARTS===========================================
deleteSelectListItem(i){
const item = <FormArray>this.selectListFB.controls['selectListItems'];
item.removeAt(i);
// this.addR
}
editSelectList(item){
  this.closeEditSidebars();//closing all edit sidebar 

  this.editSelectListFlag=true; //opening only phone_no edit sidebar

  this.selectListNo=item.formControl;// to know which fullname you are editing,
                                    //  this will be displayed on edit sidebar

 ///setting values
  this.selectListFB.patchValue({    
   required  : item.myObj.selectlist.validation.required,
   heading   : item.myObj.selectlist.listHeading,
   errorMSG  : item.myObj.selectlist.errorMSG, 
  });
}
setSelectList(){
  let index = this.dragItems.indexOf(this.currentItem);  
 
  //creating dummy or temporary object to assign
  let myObjSelectListTemp={
    selectlist:
            {
               listHeading:"your subjects",
               validation:{required:true},
               errorMSG:"Please select your subjects",      
               selectlistArray :[ ],  
            },
  
  };
 //asigning values that we received through user
 myObjSelectListTemp.selectlist.validation.required=this.selectListFB.get('required').value;
 myObjSelectListTemp.selectlist.listHeading=this.selectListFB.get('heading').value;
 myObjSelectListTemp.selectlist.errorMSG=this.selectListFB.get('errorMSG').value;

 //pushing all radio button values user has inputed 
for(let i=0;i<this.selectListFB.get('selectListItems').value.length;i++){
 // console.log(this.radioButtonsFB.get('radioButtons').value[i].radioButton);
   let myItem={id:null, name:null};

   myItem.id = (this.selectListFB.get('selectListItems').value[i].item);
   myItem.name = (this.selectListFB.get('selectListItems').value[i].item);
   myObjSelectListTemp.selectlist.selectlistArray.push(myItem);//pushing all value to temp object
}
  console.log( myObjSelectListTemp.selectlist.selectlistArray);

 this.dragItems[index].myObj = myObjSelectListTemp;//copying whole temp object to myObj
  
  this.closeEditSidebars();//closing all edit sidebar 
 }
// ===============================EDITING SELECT LIST  ENDS===========================================
//********************************************************************************************* */



 displayform(){  
   this.myService.saveObj(this.dragItems);
   this._router.navigate(['/finalForm']);   
 }

 deleteFormControl(item){
  //alert("Delete component "+item.formControl+"?");

  let index = this.dragItems.indexOf(item);
  this.dragItems.splice(index,1);//removing received item from list
 }


addComponent(typeComp:string,index:number){

  this.closeEditSidebars();//closing any edit sidebar 

  let newControl:string = null;
  switch (typeComp){
    case "fullname":{
      this.fullnameCount++;
      newControl="fullname"+this.fullnameCount; 
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjFullName,type:typeComp});
      // this.dragItems.push({formControl:newControl,myObj:this.myObjFullName,type:typeComp});
      break;
    }
    case "input":{
      this.inputCount++;
      newControl="input"+this.inputCount; 
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjInput,type:typeComp});
      // this.dragItems.push({formControl:newControl,myObj:this.myObjInput,type:typeComp});
      break;
    }
    case "address":{
      this.addressCount++;
      newControl="address"+this.addressCount;
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjAdress,type:typeComp});
      // this.dragItems.push({formControl:newControl,myObj:this.myObjAdress,type:typeComp});
      break;
    }
    case "email":{
      this.emailCount++;
      newControl="email"+this.emailCount;
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjEmail,type:typeComp});
      // this.dragItems.push({formControl:newControl,myObj:this.myObjEmail,type:typeComp});
      break;
    }
    case "phoneNo":{
      this.phoneNoCount++;
      newControl="phoneNo"+this.phoneNoCount;
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjPhoneNo,type:typeComp});

      // this.dragItems.push({formControl:newControl,myObj:this.myObjPhoneNo,type:typeComp});
      break;
    }
    case "checkbox":{
      this.checkboxCount++;
      newControl="checkbox"+this.checkboxCount; 
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjCheckbox,type:typeComp});
      // this.dragItems.push({formControl:newControl,myObj:this.myObjCheckbox,type:typeComp});
      break;
    }
    case "multiCheckbox":{
      this.multiCheckboxCount++;
      newControl="multiCheckbox"+this.multiCheckboxCount;   
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjMultiCheckbox,type:typeComp});

      // this.dragItems.push({formControl:newControl,myObj:this.myObjMultiCheckbox,type:typeComp});
      break;
    }
    case "radioButton":{
      this.radioButtonCount++;
      newControl="radioButton"+this.radioButtonCount;  
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjRadioButtons,type:typeComp}); 
      // this.dragItems.push({formControl:newControl,myObj:this.myObjRadioButtons,type:typeComp});
      break;
    }
    case "selectList":{
      this.selectListCount++;
      newControl="selectList"+this.selectListCount;
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjSelectList,type:typeComp});
   
      // this.dragItems.push({formControl:newControl,myObj:this.myObjSelectList,type:typeComp});
      break;
    }
    case "textArea":{
      this.textAreaCount++;
      newControl="textArea"+this.textAreaCount;  
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjTextarea,type:typeComp});
 
      // this.dragItems.push({formControl:newControl,myObj:this.myObjTextarea,type:typeComp});
      break;
    }
    case "table2":{
      this.table2Count++;
      newControl="table"+this.table2Count;  
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjTable2,type:typeComp});
 
      // this.dragItems.push({formControl:newControl,myObj:this.myObjTable2,type:typeComp});
      break;
    }
    case "imageDragAndDrop":{
      this.dragAndDropImageCount++;
      newControl="dragAndDropImages"+this.dragAndDropImageCount;   
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjDragAndDropImage,type:typeComp});

      // this.dragItems.push({formControl:newControl,myObj:this.myObjDragAndDropImage,type:typeComp});
      break;
    }
    case "cards":{
      this.cardsCount++;
      newControl="cards"+this.cardsCount;   
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjCard,type:typeComp});

      // this.dragItems.push({formControl:newControl,myObj:this.myObjCard,type:typeComp});
      break;
    }
    case "owlCarouselImages":{
      this.owlCarouselImgCount++;
      newControl="carouselImages"+this.owlCarouselImgCount; 
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjOwlCarouselImg,type:typeComp});
  
      // this.dragItems.push({formControl:newControl,myObj:this.myObjOwlCarouselImg,type:typeComp});
      break;
    }
    case "owlCarouselCards":{
      this.owlCarouselCardsCount++;
      newControl="owlCarouselCards"+this.owlCarouselCardsCount;   
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjOwlCarouselCards,type:typeComp});

      // this.dragItems.push({formControl:newControl,myObj:this.myObjOwlCarouselCards,type:typeComp});
      break;
    }
    case "autoComplete":{
      this.autoCompleteCount++;
      newControl="autoComplete"+this.autoCompleteCount;  
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjAutoComplete,type:typeComp});
 
      // this.dragItems.push({formControl:newControl,myObj:this.myObjAutoComplete,type:typeComp});
      break;
    }
    case "transferItemsBetList":{
      this.myTransferItemsBetListCount++;
      newControl="transferItemsBetList"+this.myTransferItemsBetListCount; 
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjTransferItemsBetList,type:typeComp});
  
      // this.dragItems.push({formControl:newControl,myObj:this.myObjTransferItemsBetList,type:typeComp});
      break;
    }
    case "ckeditor":{
      this.ckeditorCount++;
      newControl="ckeditor"+this.ckeditorCount;   
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjCKEditor,type:typeComp});

      // this.dragItems.push({formControl:newControl,myObj:this.myObjCKEditor,type:typeComp});
      break;
    }
    case "dropDown":{
      this.dropDownCount++;
      newControl="dropDown"+this.dropDownCount;   
      this.dragItems.splice(index,0,{formControl:newControl,myObj:this.myObjDropdown,type:typeComp});

      // this.dragItems.push({formControl:newControl,myObj:this.myObjDropdown,type:typeComp});
      break;
    }
  }//switch ends
// alert("Adding component "+typeComp);
  }
 


insertingInputF(){
  let newInput = document.getElementById("fullname");
  let last = document.getElementById("address");
  let lastElement = document.getElementById("inputField");
  var cln = newInput.cloneNode(true);
 let i=document.getElementById("fullname").getAttribute("class");
  console.log(cln);
  
  newInput.appendChild(cln);
 // document.getElementsByClassName("fullname").appendChild(newInput); 
  //last.insertAdjacentElement("afterend", newInput[0]);
//  last.insertBefore(newInput,last );
// lastElement.insertAdjacentElement("beforebegin",z);
// h.insertAdjacentElement("afterend", newInput);
//let abc = document.getElementsByTagName("draggable");
//console.log(newInput);


}



}
