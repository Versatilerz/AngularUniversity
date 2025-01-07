import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;
  emptyList = [];

  startDate = new Date(2000, 0, 1);
  title = this.courses[0].description;
  price = 9.99;
  rate = 0.49;

  course = COURSES[0];
  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  onCourseSelected(course: Course) {
    console.log(this.card);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.cards.changes.subscribe((cards) => console.log(cards));
  }

  onCoursesEdited() {
    this.courses.push({
      id: 1,
      description: "Angular Core Deep Dive",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "INTERMEDIATE",
      lessonsCount: 10,
    });
  }

  // trackCourse(index: number, course: Course) {
  //   return course.id;
  // }
}
