import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

 
  shareCompDemo1: FormGroup;
  fullnameEdit: FormGroup;
  editFullnameFlag: boolean=false;
 fullNameFlag: boolean=true;
 addressFlag: boolean=false;
 templateFlag: boolean=false;
 eidtFullname: boolean=false;
//   draggables = document.querySelectorAll('.draggable')
//  containers = document.querySelectorAll('.container')
/////////////////////drag and drop/////////////////////////////////////
/*draggables.forEach(draggable => {
 draggable.addEventListener('dragstart', () => {
   draggable.classList.add('dragging')
 })

 draggable.addEventListener('dragend', () => {
   draggable.classList.remove('dragging')
 })
})

containers.forEach(container => {
 container.addEventListener('dragover', e => {
   e.preventDefault()
   const afterElement = getDragAfterElement(container, e.clientY)
   const draggable = document.querySelector('.dragging')
   if (afterElement == null) {
     container.appendChild(draggable)
   } else {
     container.insertBefore(draggable, afterElement)
   }
 })
})

function getDragAfterElement(container, y) {
 const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

 return draggableElements.reduce((closest, child) => {
   const box = child.getBoundingClientRect()
   const offset = y - box.top - box.height / 2
   if (offset < 0 && offset > closest.offset) {
     return { offset: offset, element: child }
   } else {
     return closest
   }
 }, { offset: Number.NEGATIVE_INFINITY }).element
}*/

//////////////////////////////////////////////////////////



 myObjFullName={
   inputfield:   
   {fields:[
            {label:"firstname", type:"text",  validation:{required:true,maxLength:100,minLength:2}},
            {label:"lastname",  type:"text",   validation:{required:true,maxLength:null,minLength:null} },
   ]}
 }
 myObjFullNameA=[this.myObjFullName];
 fullnameCount=1;// this count implies number of fullname
 fullname=["fullname1"];



 myObjAdress={
   inputfield:   
   {fields:[
            {label:"House_No", type:"number",  validation:{required:true,maxLength:null,minLength:null}},
            {label:"address",  type:"text",validation:{required:true,maxLength:null,minLength:null}},
            {label:"area",  type:"text",validation:{required:true,maxLength:null,minLength:null}},
            {label:"city",  type:"text",validation:{required:true,maxLength:null,minLength:null}},
            {label:"state",  type:"text",validation:{required:true,maxLength:null,minLength:null}},
            {label:"zip_Code",  type:"number",validation:{required:true,maxLength:null,minLength:null}},
   ]}
 }
 fullnameSel: boolean;
 constructor(private fb:FormBuilder) {  }

 ngOnInit(): void {
   this.shareCompDemo1=this.fb.group({
    fullname1:[''],
    //  fullname1:[],
   // address:[],   
     
      });
   this.fullnameEdit=this.fb.group({
     firstname:[],
     lastname:[],   
     firstnameRequired:[],
     lastnameRequired:[],   
     firstnameMinlength:[],   
     firstnameMaxlength:[],   
     lastnameMinlength:[],   
     lastnameMaxlength:[],  
     id:[]        
      });
 }

 editFullname(index){
   this.editFullnameFlag=!this.editFullnameFlag; 
   //this.fullnameEdit.get('id').value=
   this.fullnameEdit.setValue({
     firstname:'Firstname',
     lastname:'Lastname',   
     firstnameRequired:true,
     lastnameRequired:true,   
     firstnameMinlength:1,   
     firstnameMaxlength:100,   
     lastnameMinlength:1,   
     lastnameMaxlength:100,
     id:index
   })
 }
  fullnameEdited(){
//let index = 
 // this.myObjFullNameA[].myObjFullName.inputfield.fields[0].validation.required=this.fullnameEdit.get('firstnameRequired').value;
   this.myObjFullName.inputfield.fields[0].validation.minLength=this.fullnameEdit.get('firstnameMinlength').value;
   this.myObjFullName.inputfield.fields[0].validation.maxLength=this.fullnameEdit.get('firstnameMaxlength').value;
   this.myObjFullName.inputfield.fields[1].validation.required=this.fullnameEdit.get('lastnameRequired').value;
  this.myObjFullName.inputfield.fields[1].validation.maxLength=this.fullnameEdit.get('lastnameMaxlength').value;
  this.myObjFullName.inputfield.fields[1].validation.minLength=this.fullnameEdit.get('lastnameMinlength').value;
// console.log(this.myObjFullName);

 // this.deleteFormControl('fullname');
   
 //   this.useComponent('fullname');
  // this.editFullnameFlag=false;  
  // console.log(this.myObjFullName.inputfield.fields[0].validation.minLength);
   

 }

 displayform(){
  // console.log(this.shareCompDemo1.value); 
      // this.insertingInputF();
  // this.deleteFormControl('fullname');    
 //  this.useComponent('fullname');
  
 }

 deleteFormControl(myFormControl:string,index:number){
  //  if(myFormControl=="fullname"){
  //   this.fullNameFlag=false;
  //    this.shareCompDemo1.removeControl(myFormControl);
  //    console.log("deleting formcontrol");
     
  //  }
    this.shareCompDemo1.removeControl(myFormControl);
    this.fullname.splice(index,1);
    this.myObjFullNameA.splice(index,1);
  //  this.fullnameCount--;
  //  console.log("count after delete = "+this.fullnameCount);   
    Object.keys(this.shareCompDemo1.controls).forEach(key=>{
      console.log(key);     
    })
 }


 // fullName(){
 //   this.fullnameSel=!this.fullnameSel;
 //   let keyFound=false;
 //   this.fullNameFlag=true;
 //   Object.keys(this.shareCompDemo1.controls).forEach((key:string)=>{
 //     if(key=="fullName"){
 //       keyFound=true;      
 //     }
 //   })
 //   if(keyFound==false){
 //       this.shareCompDemo1.addControl('fullName',new FormControl('')); 
 //   }
 // }

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
// let h = document.getElementById("formID");
// h.insertAdjacentElement("afterend", newInput);
//let abc = document.getElementsByTagName("draggable");

//console.log(newInput);


 }


addControlFullname(){
  //  let fullnameControl=false;
  //  let addressControl=false;
   //let controlname="fullname";
   this.fullnameCount++;
   console.log("count after adding = "+this.fullnameCount);

   let newControl="fullname"+this.fullnameCount;
   this.shareCompDemo1.addControl(newControl,new FormControl(''));
   console.log("added control="+newControl);

   this.myObjFullNameA.push(this.myObjFullName);
   this.fullname.push(newControl);
   // this.fullname.splice(this.fullnameCount,0,newControl);
    console.log(this.fullname);
    console.log(this.myObjFullNameA);
   
  //  this.myObjFullNameA.splice(this.fullnameCount,0,this.myObjFullName); 


   
 }

 

//  useComponent(controlName:string){
//    switch(controlName){
//       case "fullname":{
//         this.fullnameCount++; //user requires another fullname
//         this.addControl('fullname');
//        this.fullNameFlag=true;
//       // this.insertingInputF();
//       // this.fullNameFlag=true;
//     //  console.log("we are in usecomp");
      
//       break;
//       }
//       case "address":{
//      //  this.fullnameSel=!this.fullnameSel;

//       this.addControl('address');
//        this.addressFlag=true;
//        break;
//       }
//       case "email":{
//        this.fullnameSel=!this.fullnameSel;
//        this.addControl('email');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "phoneNo":{
//        this.fullnameSel=!this.fullnameSel;
//        this.addControl('phoneNo');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "checkbox":{
//        this.fullnameSel=!this.fullnameSel;
//        this.addControl('checkbox');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "selectlist":{
//        this.fullnameSel=!this.fullnameSel;
//        this.addControl('selectlist');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "textarea":{
//        this.fullnameSel=!this.fullnameSel;
//        this.addControl('textarea');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "radiobutton":{
//        this.addControl('radiobutton');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "multipleCheckbox":{
//        this.addControl('multipleCheckbox');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "table":{
//        this.addControl('table');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "imageUpload":{
//        this.addControl('imageUpload');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "card":{
//        this.addControl('card');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "carouselCards":{
//        this.addControl('carouselCards');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "carouselImages":{
//      //  this.addControl('carouselImages');
//        this.fullNameFlag=true;
//        break;
//       }
//       case "autoComplete":{
//        this.addControl('table');
//        this.fullNameFlag=true;
//        break;
//       }

//    }

//  }

}
