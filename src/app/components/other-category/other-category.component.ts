import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'us-other-category',
  templateUrl: './other-category.component.html',
  styleUrls: ['./other-category.component.scss']
})
export class OtherCategoryComponent implements OnInit {
  @Input() category: string;
  constructor() {}

  ngOnInit() {}
}
