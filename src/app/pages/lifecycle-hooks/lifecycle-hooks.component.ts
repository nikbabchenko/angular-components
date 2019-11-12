import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'us-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, AfterViewInit {
  title = 'red';
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.title = 'LifeCycle Hooks';
  }

  handleButtonClick() {}
}
