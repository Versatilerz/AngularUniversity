import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";
import { CommonModule } from "@angular/common";

@Component({
  selector: "course-card",
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  // @Input() title: string;
  // @Input() img: string;
  @Input({ required: true }) course: Course;
  @Input() index: number;

  @Output() courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("button is clicked");
    this.courseSelected.emit(this.course);
  }

  cardClasses(): any {
    if (this.course.category === "BEGINNER") {
      return ["beginner"];
    }

    // return { beginner: this.course.category === "BEGINNER" };
  }
}
