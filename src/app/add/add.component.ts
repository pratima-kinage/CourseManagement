import { Component } from '@angular/core';
import { course } from '../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private courseService: CourseService, private router: Router) {}

  onAddCourse(form: NgForm) {
    this.courseService.createCourse(form.value).subscribe((response) => {
      console.log(response);
      form.reset();
      alert("Course added successfuly.")
      this.router.navigate(['']);
    });
  }

  BackToHomePage() {
    this.router.navigate(['']);
  }
}
