import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-project',
  templateUrl: './student-project.component.html',
  styleUrls: ['./student-project.component.scss']
})
export class StudentProjectComponent implements OnInit {


///////////////////////myObj starts here///////////////////////////////////////////////

myObj1= {
  //[0]input field data with no of fieldname, validation
  //label will be used as formControlName, sending it in small letter, will make it capital using json pipes
  inputfield:   
   {fields:[
            {label:"firstname", type:"text",  validation:{required:true,maxLength:9},               },
            {label:"lastname",  type:"text",   validation:{required:true,minLength:5,maxLength:10}, },
            {label:"surname",   type:"text",   validation:{required:true},                          },
            {label:"email",     type:"email",  validation:{required:true,emailVal:true},            } ,
        // {label:"age",       type:"number" , validation:{required:true}                                                                   ,disabled:false   },
        // {label:"college",   type:"text",   validation:{required:true},                            errorMSG:"College is Required"        ,disabled:false    },
        // {label:"univercity",type:"text",   validation:{required:true},                            errorMSG:"Please enter your Univercity" ,disabled:false  },
        // {label:"city",      type:"text",   validation:{required:true},                            errorMSG:"Please enter your city"     ,disabled:false    },
        // {label:"country",   type:"text",   validation:{required:true},                            errorMSG:"Please enter your country"  , disabled:false   },               
            ],
          }, 
   custmClasses:{class1:"backgroundColorBlack textAlignCenter timesNewRoman"},   
      
  // classes:{applyItalic:true,applyBold:false,applyTextAlignCenter:true,applyTextColor:true,applyArialFont:true,applyBackgroundColorBlack:true} ,                            

//[1]select list data
//   selectlist:
//   {listHeading:"your subjects",isSelectValdRequired:true,
//   selectListValidationMSG:"Please select your subjects",      
//   mySubjectArray :[
//                     {id:'eng',    name:'English'    },
//                       {id:'hindi',  name:'Hindi'      },                         
//                     {id:'marathi',name:'Marathi'    },                         
//                     {id:'maths',  name:'Mathematics'},                         
//                     {id:'sci',    name:'Science'    },                         
//                     {id:'geo',    name:'Geography'  },                         
//                     {id:'cvs',    name:'Civics'     },                         
//                     {id:'hist',   name:'History'    },                                                                      
//                   ],
//   },

// //[2]checkbox data///////////
// checkbox:
// { checkboxHeading:"Agree to conditions",isCheckboxValdRequired:true,
//   checkboxValidationMSG:"Please Agree to terms and conditions to proceed" },


// //[3]ckeditor parameters
// CKEditor:{},

// //[4]dropdown
// dropdown:
// {dropdownHeading:"My Dropdown heading",dropdownMenu:[{menu:"monday"},   {menu:"tuesday"}, {menu:"wednesday"},
//                                                                            {menu:"thursday"}, {menu:"friday"},  {menu:"saturday"}   ],
//                                                              dropDownRoutLinks:[{link:"/monday"},{link:"/tuesday"}, {link:"/wednesday"},
//                                                                                 {link:"/thursday"},{link:"/friday"},{link:"/saturday"}]
// },
// //[5]textarea//////
// textarea:
// {textAreaHeading:"My textArea",isTextareaValRequired:true,textareaValMSG:"Please enter something"},

 
// //[6]radio buttons
// radioButton:
// {radioButtonHeading:"Select your gender",iRadioButtonValRequired:true,
//  radioButtonValMSG:"Please select your gender",numberOfRadioButton:3,radiobuttonName:"gender",radioButtonHeadings:["Male","Female","Other"]
// },
// //[7]multiple checkbox
// multipleCheckbox:
// {
//   multipleCheckboxHeading:"Choose your Favourite fruits",
//   ismultipleCheckboxValRequired:true,multipleCheckboxValMSG:"Please select at least one option",
//   multipleCheckboxItems:["oranges","banana","gauva","grapes","apple","mango"]
// },
// //dragAndDrop
// dragAnddrop:{ },


// //[8]table data//////////////
// table:
// {tableHeading:"Student enrolled List",
// myStudentList:[
//                 {id:1,firstName:"Akash",  middleName:"Aviansh",lastName:"Makde"},
//                 {id:2,firstName:"Rahul",  middleName:"Aviansh",lastName:"Makde"},
//                 {id:3,firstName:"Sakash", middleName:"Aviansh",lastName:"Makde"},
//                 {id:4,firstName:"natutp", middleName:"Aviansh",lastName:"Makde"},
//                 {id:5,firstName:"fxxxxf", middleName:"Aviansh",lastName:"Makde"},
//                 {id:6,firstName:"Avvvkash",middleName:"Aviansh",lastName:"Makde"},
//                 {id:7,firstName:"Akash",  middleName:"Aviansh",lastName:"Makde"},
//                 {id:8,firstName:"Akash",  middleName:"Aviansh",lastName:"Makde"},
//                 {id:9,firstName:"Akaxxxsh",middleName:"Aviansh",lastName:"Makde"},
//                 {id:10,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
         
              
//               ]
// },//table ends
//formControlName:{name":inputForm"}
} ;//myObj ends
//declaring object1 for select list
myObj2={
    selectlist:
            { listHeading:"your subjects",validation:{required:true},
              errorMSG:"Please select your subjects",      
              selectlistArray :[
                                  {id:'eng',    name:'English'    },
                                  {id:'hindi',  name:'Hindi'      },                         
                                  {id:'marathi',name:'Marathi'    },                         
                                  {id:'maths',  name:'Mathematics'},                         
                                  {id:'sci',    name:'Science'    },                         
                                  {id:'geo',    name:'Geography'  },                         
                                  {id:'cvs',    name:'Civics'     },                         
                                  {id:'hist',   name:'History'    },                                                                      
                                ],  
            },
  
};
//declaring object3 for another two fields
myObj3={
  //[0]input field data with no of fieldname, validation
  //label will be used as formControlName, sending it in small letter, will make it capital using json pipes
  inputfield:   
   {fields:[    
                  {label:"email",type:"email",  validation:{required:true,emailVal:true},  errorMSG:"email is Required" } ,
                  {label:"age", type:"number" , validation:{required:true}      },
                                
                               ] },  

};
//checkbox
myObj4={
  checkbox:
  { heading:"Agree to conditions",validation:{required:true},
  errorMSG:"Please Agree to terms and conditions to proceed" },
};
//dragAndDrop image
myObj5={
  dragAndDropImage:{ }, //this key "dragAnddrop" will tell reusable component to use dragAnddrop code to run
};
//ckeEditor
myObj6={
  CKEditor:{},
};
//dropdown
myObj7={
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

/////textarea//////
myObj8={
 textarea:{heading:"My textArea",
           validation:{required:true},
           errorMSG:"please enter mmmmr something"}
           };
////radio buttons
myObj9={
radioButton:
  {heading:"Select your gender",validation:{required:true},
  errorMSG:"Please select your gender",noOfRadioButton:3,name:"gender",options:["Male","Female","Other"]
}
};
//multipleCheckbox
myObj10={
  multipleCheckbox:
 {
  heading:"Choose your Favourite fruits",
  validation:{required:true},errorMSG:"Please select at least one option",
  items:["oranges","banana","gauva","grapes","apple","mango"]
 } 
 };
 //table
 myObj11={
  table:
  {tableHeading:"Student enrolled List",
  list:[
                  {id:1,firstName:"Akash",  middleName:"Aviansh",lastName:"Makde"},                  
                  {id:2,firstName:"Rahul",  middleName:"Aviansh",lastName:"Makde"},
                  {id:3,firstName:"Sakash", middleName:"Aviansh",lastName:"Makde"},
                  {id:4,firstName:"natutp", middleName:"Aviansh",lastName:"Makde"},
                  {id:5,firstName:"fxxxxf", middleName:"Aviansh",lastName:"Makde"},
                  {id:6,firstName:"Avvvkash",middleName:"Aviansh",lastName:"Makde"},
                  {id:7,firstName:"Akash",  middleName:"Aviansh",lastName:"Makde"},
                  {id:8,firstName:"Akash",  middleName:"Aviansh",lastName:"Makde"},
                  {id:9,firstName:"Akaxxxsh",middleName:"Aviansh",lastName:"Makde"},
                  {id:10,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:11,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:12,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:13,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:14,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:15,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:16,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:17,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:18,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:19,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:20,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:21,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:22,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:23,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:24,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:25,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},
                  {id:26,firstName:"Akash", middleName:"Aviansh",lastName:"Makde"},    
                ]
  }
 }
 ///cards//////////////////
myObj12={
  card:{
    image:"../../../assets/images/1514540411738.jpg",
    title:"hello",
    description:"Welcome to our store"
  }
}
myObj13={
  cardWithSlider:{
    title:"welcome",
    descriptiom:"My card",
    images:{
      image1:"../../../assets/images/vegies.png",
      image2:"../../../assets/images/pexels-zukiman-mohamad-21787.jpg" ,
      image3:"../../../assets/images/salad-table.jpg"
    }
  }
}
myObj14={
  slidingCards:[
    {title:"Manchurian",descriptiom:"World class manchurian",image:"../../assets/images/plate-1.png",isActive:"carousel-item active",dataInterval:"2000"},
    {title:"Omlet",descriptiom:"World class omlet",image:"../../assets/images/plate-2.png",isActive:"carousel-item",dataInterval:"2000"},
    {title:"paneer",descriptiom:"World class paneer",image:"../../assets/images/plate-3.png",isActive:"carousel-item",dataInterval:"2000"}, 
  ],
}
  
  myObj15={
    owlCarouselImg:[
      {id:1,title:"Pasta",descriptiom:"World class manchurian",image:"../../assets/images/plate-1.png",alt:"image not found"},
      {id:2,title:"Omlet",descriptiom:"World class omlet",image:"../../assets/images/plate-2.png",alt:"image not found"},
      {id:3,title:"paneer",descriptiom:"World class paneer",image:"../../assets/images/plate-3.png",alt:"image not found"}, 
      {id:4,title:"Pasta",descriptiom:"World class paneer",image:"../../assets/images/plate-1.png",alt:"image not found"}, 
      {id:5,title:"Omlet",descriptiom:"World class paneer",image:"../../assets/images/plate-2.png",alt:"image not found"}, 
      {id:6,title:"paneer",descriptiom:"World class paneer",image:"../../assets/images/plate-3.png",alt:"image not found"}, 
    ]
  };
myObj16={
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
myObj17={
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

myObj19={
  tranItemsBetList:{
    todo : [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ],  
    done : [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ],
    toDoHeading:"To do",
    doneHeading:"Done man"
  },
}

myObjFullName={
  inputfield:   
  {fields:[
           {label:"firstname", type:"text",  validation:{required:true,maxLength:20}},
           {label:"lastname",  type:"text",   validation:{required:true,maxLength:20} },
          ]
  }
}
  shareCompDemo: FormGroup;
  constructor(private fb:FormBuilder) {  }

  ngOnInit(): void {

    this.shareCompDemo=this.fb.group({
                                     inputForm:[],
                                     selectList:[],
                                     emailField:[],
                                     checkbox:[],
                                     ckeEditor:[],
                                     textarea:[],
                                     radiobuttons:[],
                                     multipleCheckBox:[],
                                     fullName:[]
                                      });
   
  }
  
  displayForm(){
    console.log(this.shareCompDemo.value);
    
  }
 
 
}



