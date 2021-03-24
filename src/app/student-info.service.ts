import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http' ;
const baseUrl = 'http://localhost:3000/students';
@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {
 myObj = null;
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
}
