import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewEncapsulation,
} from "@angular/core";

import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "src/app/model/course";
import { NgIf, NgSwitch, NgSwitchCase } from "@angular/common";

@Component({
    selector: "course-card",
    templateUrl: "./course-card.component.html",
    styleUrls: ["./course-card.component.css"],
    imports: [
        NgIf,
        NgSwitch,
        NgSwitchCase,
    ],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor() {}

  ngOnInit() {}

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }
}
