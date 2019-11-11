import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'us-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent implements OnInit {
  active = true;
  codeExample = {
    styleBinding: `
    <button class="button is-link" [style.color]="active ? 'red' : 'green'">Red</button>
    <button class="button" [style.background-color]="active ? 'red' : 'green'">Save</button>
    <button class="button is-warning" [style.font-size.px]="active ? 20 : 25">With font-size in px</button>
    <button class="button is-link" [style.font-size]="active ? '20px' : '25px'">With font-size in px</button>
    <button class="button is-success" [style.opacity]="active ? 1 : 0.5">With Opacity</button>`,
    ngStyle: `
    <button class="button is-link" [ngStyle]="{ color: active ? 'red' : 'green' }">Red</button>
    <button class="button" [ngStyle]="{ 'background-color': active ? 'red' : 'green' }">Save</button>
    <button class="button is-warning" [ngStyle]="{ 'font-size': active ? '20px' : '25px' }">Font-size</button>
    <button class="button is-link" [ngStyle]="active ? { 'font-size': '20px', opacity: 1, color: blue, 'margin-top': '10px' }
    : {opacity: 0.5}">Several styles</button>`
  };
  constructor() {}

  ngOnInit() {}

  toggleActive() {
    this.active = !this.active;
  }
}
