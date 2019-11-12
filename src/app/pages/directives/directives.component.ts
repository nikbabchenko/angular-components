import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'us-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  ripple = true;
  content = 'Lorem';
  constructor() {}

  ngOnInit() {}

  addContent() {
    this.content += 'ipsum ' + this.content;
  }
}
