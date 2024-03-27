import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }
  url :any ="http://localhost:3000/students"
  getAllStudent(){
    return this.http.get(this.url)
  }
  saveStudentData(data:any){
    
    console.log(data);
    return this.http.post(this.url,data)
  }
  deleteStudent(id:any):any{
    return this.http.delete(`${this.url}/${id}`)
    
  }
  getStudentById(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  UpdateStudentData(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
  users() {
    this.http.get(this.url);
  }

}
