import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http' ;
import { myObjInterface } from './name-email-age/myObjRec';
const baseUrl = 'http://localhost:3000/students';
@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {
 myObj:myObjInterface;
 list1:{ listItem: string; selected: boolean }[] = [];
 list2:{ listItem: string; selected: boolean }[] = [];


  constructor(private httpClient:HttpClient) { }

  getAllStudentInfo(){
   return this.httpClient.get("http://localhost:3000/students");
  }

  findmobileNo(mobileno){   
    return this.httpClient.get(`${baseUrl}?mobileNo=${mobileno}`);
  }

  createStudent(user){
   return this.httpClient.post("http://localhost:3000/students", user);
  }

  updateStudent(user){   
   return this.httpClient.put("http://localhost:3000/students/" +user.id,user);
  }

  deleteUser(user){
   return this.httpClient.delete("http://localhost:3000/students/" +user.id);
  }

  saveObj(myObj){
    this.myObj = myObj;
  }
  getObj(){
    return this.myObj;
  }
  getList1(){
    return this.list1;
  }
  getList2(){
    return this.list2;
  }
  saveList1(list1){
    this.list1 = list1;
    }
  saveList2(list2){
    this.list2 = list2;
  }
 
}
