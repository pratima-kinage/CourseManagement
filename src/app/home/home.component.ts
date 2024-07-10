import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { course } from '../course';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   allCourses:any

constructor(private courseService:CourseService, private route:Router
){}

  ngOnInit(): void {
    this.getData();
  }

  addCourse(){
    console.log('in home component');
    this.route.navigate(['add']);
  }

  deleteData(id:number){
    this.courseService.onDeleteData(id).subscribe(res =>{
      console.log(res);
      this.getData();

    })
  }

  getData(){
    this.courseService.fetchData().subscribe(res =>{
      console.log(res);
      this.allCourses=res
    })
  }



}


