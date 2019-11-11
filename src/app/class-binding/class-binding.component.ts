import { Component } from '@angular/core';

@Component({
  selector: 'us-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent {
  active = true;
  codeExample = {
    interPolation: `<div  class="item {{ active ? 'is-active' : '' }}"></div>`,
    overwrite: `<div class="item" [attr.class]="active ? 'is-active' : 'not-active'">I'm {{ active ? 'active' : 'not-active'}}</div>`,
    className: `<div class="item" [class.is-active]="active">Lorem ipsum</div>`,
    ngClass: `<div class="item" [ngClass]="{ 'is-active': active }">Lorem ipsum</div>`
  };
  constructor() {}

  toggleActive() {
    this.active = !this.active;
  }
}
