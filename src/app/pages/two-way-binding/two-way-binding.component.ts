import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'us-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {
  user = {
    firstName: 'John',
    lastName: 'Doe'
  };
  admin;
  codeExample = {
    twoWay: `<input class="input" #userInput [(ngModel)]="user.firstName" id="username" />`,
    twoWayWithValue: `<input #lastNameInput class="input" [value]="user.lastName" (input)="user.lastName = $event.target.value" id="userLastName" />`,
    twoWayNgModelChange: `<input #lastNameInput class="input" [ngModel]="user.lastName" (ngModelChange)="user.lastName = $event" id="userLastName" />`,
    radioBinding: `<label class="radio">
  <input [(ngModel)]="color" value="red" type="radio" />Red
</label>
<label class="radio">
  <input [(ngModel)]="color" value="blue" type="radio" />
  Blue
</label>
<label class="radio">
  <input [(ngModel)]="color" value="green" type="radio" />
  Green
</label>
<p [style.color]="color">Current color: {{ color }}</p>`
  };

  color = 'red';

  constructor() {}

  ngOnInit() {}
}
