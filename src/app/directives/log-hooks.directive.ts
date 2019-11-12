import { Directive, ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

const logIt = (el: HTMLElement, text: string) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('message');
  wrapper.classList.add('is-success');
  wrapper.innerText = text;
  el.append(wrapper);
};

@Directive({
  selector: '[usLogHooks]'
})
export class LogHooksDirective implements OnInit, AfterViewInit, OnDestroy {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log('--ngOnInit');
    logIt(this.el.nativeElement, `ngOnInit`);
  }

  ngAfterViewInit() {
    console.log('--ngAfterViewInit');
    logIt(this.el.nativeElement, `ngAfterViewInit`);
  }

  ngOnDestroy() {
    console.log('--ngOnDestroy');
  }
}
