import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'us-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, AfterViewInit {
  title = 'red';
  counter = 1;
  isShowComponent = true;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.title = 'LifeCycle Hooks';
  }

  handleButtonClick() {}

  increaceCounter() {
    this.counter++;
  }

  toggleComponent() {
    this.isShowComponent = !this.isShowComponent;
  }
}
