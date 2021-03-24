import { StudentInfoService } from './../student-info.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {

  emails = [{ email: "email1", isChecked: false },
            { email: "email2", isChecked: false },
            { email: "email3", isChecked: false }, 
            { email: 'email4', isChecked: false}]

//  myEmails = [{  isChecked: true },
//             {  isChecked: false },
//             {  isChecked: true }, 
//             {  isChecked: false}]



  
  branches= ['Computer Science','Electronics','Information technology','Mechanical','Electrical','Civil'];            
  //setting flag value for topic in select branch
  topicHasError = true;
  duplicateMobileNoFound=false;
  duplicateMobileNoNotFound=false;
  submittedSuccessfully=false;
  updatedSuccessfully=false;
 
  //dummy object
  userObj={
    name:"",
    gender:"",
    email:"",
    mobileNo:"",
    address:"",
    branch:"",
   useremail:[],
    myHobbies:[],
    id:"",
  };
  //creating dummy object to accept boolean values of checkbox
  userObj2={
    name:"",
    gender:"",
    email:"",
    mobileNo:"",
    address:"",
    branch:"",
   
    myHobbies:[],
 
  };
  allUser:any;
  mobileObj:any;
  mobileUserName:string;
  isEdit=false;
  myId: any;
  hobbiesLenght: any;
  editButtonClickedCount= 0;
  lastHobbieslength=0;
  newHobbyAdded=0;
  
  studentInfo: FormGroup;

  constructor(private fb:FormBuilder, private studentInfoService:StudentInfoService) { }

  ngOnInit(): void {
    this.studentInfo=this.fb.group({
      name:     ['',Validators.required],
      gender:   ['',Validators.required],
      email:    ['',[Validators.required,Validators.email]],
      mobileNo: ['',Validators.required],
      address:  ['',Validators.required],
      branch:   ['',Validators.required],
     
      myHobbies:this.fb.array([  ]),
      useremail: this.fb.array([]),
      //userHobbies: this.fb.array([])
    });

    this.getAllStudentList();//getting all students at start
  }

////////////function used in multiple checkbox
onChange(email: string, isChecked: boolean) {
  const emailFormArray = <FormArray>this.studentInfo.controls.useremail;

  if (isChecked) {
    emailFormArray.push(new FormControl(email));
  } else {
    let index = emailFormArray.controls.findIndex(x => x.value == email)
    emailFormArray.removeAt(index);
  }
}

  /////for select branch//////
  validateTopic(value1){
    if(value1 === 'default'){
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }
  };
/////////////////get hobby//////////
get myHobbies(){
  return this.studentInfo.get('myHobbies') as FormArray;
}
//////////////////adding new hobby/////////////







//--------------------------------------curd operations- starts-------------
// ---------------------------------------------------------
////creating student///
addStudent(user){
  //console.log(user);
 
  this.studentInfoService.createStudent(user).subscribe(()=>{
   
  });
  this.submittedSuccessfully=true;
 this.getAllStudentList();
}

//////getting all student list
getAllStudentList(){
  this.studentInfoService.getAllStudentInfo().subscribe((data)=>{
   this.allUser=data;
  })
}

////finding duplicate mobile no
isDuplicateFound(userData){
  this.studentInfoService.findmobileNo(userData).subscribe((data)=>{
    console.log(data);
    this.mobileObj=data;
   // console.log(this.mobileObj.length);
  
    
    if(this.mobileObj.length){
       this.mobileUserName=this.mobileObj[0].name; 
       this.duplicateMobileNoNotFound=false;
      this.duplicateMobileNoFound=true;
    }
    else{
      this.duplicateMobileNoFound=false;
      this.duplicateMobileNoNotFound=true;  
    }
  });

}

///deleting student from list
deleteStudent(user){
this.studentInfoService.deleteUser(user).subscribe(()=>{
});
this.getAllStudentList();
}

///updating user function
updateUser(user){
  this.isEdit=!this.isEdit;

  //console.log(user);

  this.userObj={
    name:user.name,
    gender:user.gender,
    email:user.email,
    mobileNo:user.mobileNo,
    address:user.address,
    branch:user.branch,
    useremail:user.usermail, 
    myHobbies:user.myHobbies,
    id:this.myId,
  }; 

 
  this.studentInfoService.updateStudent(this.userObj).subscribe(()=>{
    this.getAllStudentList();
  });
}

//function to remove hobbies ro when clicked multiple edit button
editButtonClicked(){
  this.editButtonClickedCount++;
  console.log("edit button clicked :",this.editButtonClickedCount,"time");
  
}
//function to remove hobbies ro when clicked multiple edit button
updateButtonClicked(){
  this.editButtonClickedCount=1;
}

///adding hobbies rows and removing rows
addNewHobby(){
  const newHobby=new FormControl();
  this.myHobbies.push(newHobby); 
  this.newHobbyAdded++;
  console.log(this.newHobbyAdded,"user added");
 
}

removeHobby(hobbyId){
this.myHobbies.removeAt(hobbyId);
//console.log(hobbyId);
console.log(hobbyId,"th row removed");

}
  /////////////////////////////////////////////
 ///////setting values for update process/////
/////////////////////////////////////////////
setValuesToEdit(user){

  this.myId=user.id;
  this.isEdit=true;
  //console.log(user);

 if(this.editButtonClickedCount>1){
    for(let j=0; j<this.lastHobbieslength; j++){
      this.removeHobby(j);
  }
 }
  // this.hobbiesLenght=user.myHobbies.length;
  //console.log(user.myHobbies.length);

  ////adding new hobbies rows to edit///
 
    if(user.myHobbies.length>0){
      for(let i=0; i<user.myHobbies.length; i++){
        this.addNewHobby();        
        
      }
    }
    
    //storing hobbies length for next double edit use
    this.lastHobbieslength=user.myHobbies.length;

    
//console.log(user.myHobbies);


  //console.log(this.myEmails);
// this.emails.forEach(element => {
//   user.useremail.forEach(element1 => {
//     if(element.email === element1){
//       element1.isChecked= true;
//       console.log(element1.isChecked);
//    // 
      
//     }
//   });
// });
//console.log(user.myHobbies);

  this.studentInfo.patchValue({
    name:    user.name,
    gender:  user.gender,
    email:   user.email,
    mobileNo:user.mobileNo,
    address: user.address,
    branch:  user.branch,
    myHobbies:user.myHobbies

  
  })

}


//-----------------------------curd end----------------------
//--------------------check for mobileNo-----------------//


resetForm(){
  this.studentInfo.reset();
}

}
