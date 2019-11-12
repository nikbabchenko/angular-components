import { Directive, ElementRef, HostListener, Input, AfterViewChecked, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export enum WindowBreakPoints {
  SM = 767,
  MD = 1200
}

@Directive({
  selector: '[usEqualHeight]'
})
export class EqualHeightDirective implements AfterViewChecked, OnDestroy {
  // class name to match height
  @Input() mpEqualHeight: string;
  @Input() maxWidth: WindowBreakPoints;

  ngUnsubscribe = new Subject();

  constructor(private el: ElementRef) {}

  ngAfterViewChecked() {
    // call our setEqualHeight function here later
    this.setEqualHeight(this.el.nativeElement, this.mpEqualHeight);
  }

  @HostListener('window:resize')
  onResize() {
    // call our setEqualHeight function here later
    this.setEqualHeight(this.el.nativeElement, this.mpEqualHeight);
  }

  setEqualHeight(parent: HTMLElement, className: string) {
    if (!parent) {
      return;
    }

    const children = parent.getElementsByClassName(className);

    if (!children) {
      return;
    }

    if (WindowBreakPoints[this.maxWidth] && (window as any).innerWidth < WindowBreakPoints[this.maxWidth]) {
      this.resetHeight();
      return;
    }

    this.resetHeight();

    const itemHeights = Array.from(children).map(x => x.getBoundingClientRect().height);

    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    Array.from(children).forEach((x: HTMLElement) => (x.style.height = `${maxHeight}px`));
  }

  resetHeight() {
    if (!this.el.nativeElement || !this.mpEqualHeight) {
      return;
    }

    const children = this.el.nativeElement.getElementsByClassName(this.mpEqualHeight);

    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = 'initial';
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
