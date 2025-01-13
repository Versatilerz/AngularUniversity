import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { HighlightedDirective } from "./courses/directives/highlighted.directive";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { CoursesService } from "./courses/courses.service";
import { createCustomElement } from "@angular/elements";
import { CourseTitleComponent } from "./course-title/course-title.component";
import { NgFor } from "@angular/common";
import { CourseCardComponent } from "./courses/course-card/course-card.component";
import { CourseImageComponent } from "./courses/course-image/course-image.component";
import { FilterByCategoryPipe } from "./courses/filter-by-category.pipe";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    imports: [
        NgFor,
        CourseCardComponent,
        CourseImageComponent,
        FilterByCategoryPipe,
    ],
})
export class AppComponent implements OnInit {
  // courses$: Observable<Course[]>;
  courses = COURSES;

  constructor(
    private coursesService: CoursesService,
    private injector: Injector
  ) {}

  ngOnInit() {
    // this.courses$ = this.coursesService.loadCourses();
    const htmlElement = createCustomElement(CourseTitleComponent, {
      injector: this.injector,
    });

    customElements.define("course-title", htmlElement);
  }

  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("course got saved"));
  }
}
