import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8080/courses"

  createCourse(data:course){
    return this.http.post(`${this.baseUrl}/create`,data)
  }

  fetchData(){
    return this.http.get(`${this.baseUrl}/`);

  }

  updateData(data:any){
    console.log("in service update method");
    return this.http.post(`${this.baseUrl}/create`,data);
  }

  onDeleteData(id:number){
    console.log("in service delelted" +id);

    return this.http.delete(`${this.baseUrl}/${id}` );
  }

  getCourseById(id:number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
