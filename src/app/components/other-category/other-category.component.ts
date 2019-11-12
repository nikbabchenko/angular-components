import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'us-other-category',
  templateUrl: './other-category.component.html',
  styleUrls: ['./other-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherCategoryComponent implements OnInit {
  @Input() category: string;
  constructor() {}

  ngOnInit() {}
}
