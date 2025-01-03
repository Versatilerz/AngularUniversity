import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  // @Input() title: string;
  // @Input() img: string;
  @Input({ required: true }) course: Course;
  @Input({ required: true }) index: number;

  @Output() courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("button is clicked");
    this.courseSelected.emit(this.course);
  }
}
