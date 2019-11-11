import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'us-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  active = true;
  colors = ['red', 'blue', 'green'];
  user = 'Dan';
  categories = ['bus', 'avia', 'train', 'insurance'];
  selectedCategory = this.categories[1];

  codeExample = {
    ngIf: `
active = true;

<div *ngIf="active" class="box">
  <p>Conditionally show when active</p>
</div>
    `,
    ngIfElse: `
user = 'Dan';

<div class="box">
  <div *ngIf="user; else userNotAuthorized">
    <p class="notification is-success">Hello, {{ user }}</p>
    <button class="button is-primary rounded" (click)="user = null">Logout</button>
  </div>
</div>
<ng-template #userNotAuthorized>
  <p class="notification is-danger">not authroized</p>
  <button class="button is-link" (click)="user = 'John'">Login as Ivan Ivan</button>
</ng-template>`,
    ngFor: `
colors = ['red', 'blue', 'green'];

<div *ngFor="let color of colors; trackBy: color" class="box">
  <p [style.color]="color">I'm {{ color }}</p>
</div>`,
    ngSwitch: `
categories = ['bus', 'avia', 'train', 'insurance'];

<div class="control">
  <label *ngFor="let category of categories; trackBy: category" class="radio"> <input type="radio" [(ngModel)]="selectedCategory" [value]="category" /> {{ category }}</label>
  <h3 class="sub-title">current category: {{ selectedCategory }}</h3>
  <div [ngSwitch]="selectedCategory">
    <us-bus *ngSwitchCase="'bus'"> </us-bus>
    <us-train *ngSwitchCase="'train'"></us-train>
    <us-other-category [category]="selectedCategory?.toUpperCase()" *ngSwitchDefault></us-other-category>
  </div>
</div>`
  };

  constructor() {}

  ngOnInit() {}

  toggleActive() {
    this.active = !this.active;
  }
}
