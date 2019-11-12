import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'us-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleButtonClick() {}
}
