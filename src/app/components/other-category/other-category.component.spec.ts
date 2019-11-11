import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCategoryComponent } from './other-category.component';

describe('OtherCategoryComponent', () => {
  let component: OtherCategoryComponent;
  let fixture: ComponentFixture<OtherCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtherCategoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
