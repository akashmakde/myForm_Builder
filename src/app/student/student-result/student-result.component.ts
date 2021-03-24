import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from '../../student-info.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.scss']
})
export class StudentResultComponent implements OnInit {

  
  shareCompDemo2:FormGroup;
  allUser: Object;
  constructor(private fb:FormBuilder,private infoservice:StudentInfoService) { }
myObjForm={
  
  inputfield:{fields:[    
           {label:"surname",   type:"text",   validation:{required:false}, errorMSG:"Surname is Required"        },
           {label:"firstname", type:"text",   validation:{required:true,maxLength:9},              errorMSG:"Please enter your Firstname" },
           {label:"lastname",  type:"text",   validation:{required:true,minLength:5,maxLength:10}, errorMSG:"Please enter your lastname"  },
           {label:"email",     type:"email",  validation:{required:true,emailVal:true},             errorMSG:"email is Required"          } ,
       ],      
      }
}
//checkbox
myObjCheckbox={
  checkbox:
  { heading:"Agree to conditions",validation:{required:true},
     errorMSG:"Please Agree to terms and conditions to proceed" },
};

  ngOnInit(): void {
    this.shareCompDemo2=this.fb.group({
      allInOne2:[],
      checkbox:[]
    });
    this.getAllStudentList();  
  }

// ================================crud methods==========================
addStudent(user){
 // console.log(user);  
  this.infoservice.createStudent(user).subscribe(()=>{
  });
  this.getAllStudentList();
}

getAllStudentList(){
  this.infoservice.getAllStudentInfo().subscribe((data)=>{
   this.allUser=data;
  })
}

deleteStudent(user){
  this.infoservice.deleteUser(user).subscribe(()=>{
  });
  this.getAllStudentList();
  }

  editUser(user){
  this.shareCompDemo2.setValue({
  allInOne2:user.allInOne2,  
  checkbox:user.checkbox,  
    });
}

}
