import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { course } from '../course';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
   id!: number;
   updatedCourse:any;


  constructor(private route:Router,private courseService:CourseService, private activatedRoute:ActivatedRoute){
  }

  ngOnInit() {
    // paramMap replaces params in Angular v4+
     this.id = this.activatedRoute.snapshot.params['id'];

     this.courseService.getCourseById(this.id).subscribe(data=>{
      this.updatedCourse = data;
     })
  }



  editData(){

    this.courseService.updateData(this.updatedCourse).subscribe(data =>{
      console.log(data);
      alert("Course updated successfully");
      this.route.navigate(['']);
    })
  }

  backToHomePage(){
    this.route.navigate(['']);
  }


}
