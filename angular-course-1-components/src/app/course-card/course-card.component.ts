import { Component, Input } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input() title: string;
  @Input() img: string;
  @Input({ required: true }) course: Course;
}
