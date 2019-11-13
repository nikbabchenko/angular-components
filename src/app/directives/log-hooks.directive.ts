import {
  Directive,
  ElementRef,
  OnInit,
  AfterViewInit,
  OnDestroy,
  DoCheck,
  AfterViewChecked,
  SimpleChanges,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  Input
} from '@angular/core';

let index = 1;
const logIt = (el: HTMLElement, text: string) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('message');
  wrapper.classList.add('is-success');
  wrapper.innerHTML = `${index}. ${text}`;
  el.append(wrapper);
  index++;
};

// tslint:disable-next-line: no-conflicting-lifecycle
@Directive({
  selector: '[usLogHooks]'
})
export class LogHooksDirective
  implements
    OnInit,
    AfterViewInit,
    OnDestroy,
    DoCheck,
    AfterViewChecked,
    OnChanges,
    AfterContentChecked,
    AfterContentInit {
  constructor(private el: ElementRef) {}
  @Input() counter;

  ngOnChanges(changes: SimpleChanges) {
    logIt(this.el.nativeElement, `ngOnChanges - <b>${JSON.stringify(changes)}</b>`);
  }

  ngOnInit() {
    console.log('--ngOnInit');
    logIt(this.el.nativeElement, `ngOnInit`);
  }

  ngDoCheck() {
    console.log('--ngDoCheck');
    logIt(this.el.nativeElement, `ngDoCheck`);
  }

  ngAfterContentInit() {
    console.log('--ngAfterContentInit');
    logIt(this.el.nativeElement, `ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log('--ngAfterContentChecked');
    logIt(this.el.nativeElement, `ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log('--ngAfterViewInit');
    logIt(this.el.nativeElement, `ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log('--ngAfterViewChecked');
    logIt(this.el.nativeElement, `ngAfterViewChecked`);
  }

  ngOnDestroy() {
    console.log('--ngOnDestroy');
    index = 0;
  }
}
