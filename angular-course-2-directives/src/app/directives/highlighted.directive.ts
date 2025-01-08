import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
})
export class HighlightedDirective {
  @Input("highlighted") isHighLighted = false;

  @Output() toggleHighlight = new EventEmitter();

  constructor() {
    console.log("directive created");
  }

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighLighted;
  }

  // @HostBinding("attr.disabled")
  // get disabled() {
  //   return true;
  // }

  @HostListener("mouseover", ["$event"])
  mouseover() {
    this.isHighLighted = true;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  @HostListener("mouseleave", ["$event"])
  mouseleave() {
    this.isHighLighted = false;
    this.toggleHighlight.emit(this.isHighLighted);
  }
}
