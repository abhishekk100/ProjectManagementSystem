import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDetails } from './feature/project-details';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8080/con1/"
  baseUrl1="http://localhost:8080/con2/"
  addAll(user:User){
   return this.http.post(this.baseUrl+'addUser',user);}
  addProject(project:ProjectDetails){
   return this.http.post(this.baseUrl1+'addProject',project);} 
  deleteUser(id:number):Observable<Object>{
  return  this.http.delete(this.baseUrl+'deleteUser'+`/${id}`);}

  checkLoginUser(user:User){
return this.http.post(this.baseUrl+'checkuser',user);
  }

  getAllProjectDetails():Observable<ProjectDetails[]>{
    return this.http.get<ProjectDetails[]>(this.baseUrl1+'getProjectDetails');
  }

 changeProjectStatus(proId:number,status:string){
  return this.http.get(this.baseUrl1+'changeStatus'+`/${proId}`+`/${status}`)
 }
 getTotaleProject():Observable<Object>{
  return this.http.get(this.baseUrl1+'totalPro');
 }
//  getRunningProject(){
//   return this.http.get(this.baseUrl1+'runningPro');
//  }
//  getCloseProject(){
//   return this.http.get(this.baseUrl1+'closePro');
//  }
//  getCancelledProject(){
//   return this.http.get(this.baseUrl1+'canclePro');
//  }
}


