export interface myObjInterface{ 
   inputfield?: {      
      fields: ({
          label: string,
          formControlName:string,
          placeholder:string,
          type:string,
          validation: {
            required?: boolean,
            minLength?: number,
            maxLength?: number,
            emailVal?:boolean,            
        },        
         // errorMSG: string;
   })[]};
         //select list
    selectlist?:{
                  listHeading:string,
                  validation:{ 
                             required:boolean,
                  }
                  errorMSG:string,      
                  selectlistArray :
                                      {id:string, name:string}[], 
                                    
              };
                                  
                  //checkbox
 checkbox?:{        
         heading:string,
         validation:{
                    required:boolean
                    }
         errorMSG:string,       
      };
      
      //dropdown
   dropdown?:{
      heading:string,
      items:{item:string}[],
      dropDownRoutLinks:{link:string}[],
    };
       //CKEditor selected 
    CKEditor?:{
       };
       //textarea
     textarea?: {
        heading: string;
        validation: {
            required: boolean;
        }
        errorMSG: string;
    };
  //////// //radio buttons
       radioButton?: {
        heading: string;
        validation: {
            required: boolean;
        };
        errorMSG: string;
        noOfRadioButton: number;
        name: string;
        options: string[];
    };
     //multiple checkbox
     multipleCheckbox?: {
      heading: string;
      validation: {
          required: boolean;
      };
      errorMSG: string;
      items: string[];
  };
  
  dragAndDropImage?: {};
        //table///
   table?:{
        tableHeading:string,
        list:[{}
              // {id:number,firstName:string,middleName:string,lastName:string}
          ],//list is array of objects containing any no of keys which will act as table heading
      };
   table2?:{
        // tableHeading:string,
        // list:[{}
        //       // {id:number,firstName:string,middleName:string,lastName:string}
        //   ],//list is array of objects containing any no of keys which will act as table heading
      };
     
      custmClasses?:{class1:string};
      card?:{
        image:string,
        title:string,
        description:string,
      };
      // cardWithSlider:{
      //   title:string,
      //   descriptiom:string,
      //   images:{
      //     image1:string,
      //     image2:string,
      //     image3:string,
      //   }
      // };

    //   slidingCards: {
    //     title: string;
    //     descriptiom: string;
    //     image: string;
    //     isActive: string;
    //     dataInterval: number;
    // }[];
    owlCarouselCards?: {
      id: number;
      title: string;
      descriptiom: string;
      image: string;
      alt: string;
  }[];
  owlCarouselImg?: {
    id: number;
    title: string;
    descriptiom: string;
    image: string;
    alt: string;
}[];
autoComplete?: {
  data: {
      id: number;
      name: string;
  }[];
  placeholder: string;
};
tranItemsBetList?: {
  todo: string[];
  done: string[];
  toDoHeading: string;
  doneHeading: string;
};
transferItemsBetList?: {
  // todo: string[];
  // done: string[];
  // toDoHeading: string;
  // doneHeading: string;
};
}

  

