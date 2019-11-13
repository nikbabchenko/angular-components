import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { RippleButtonDirective } from '../directives/button-ripple.directive';
import { OnlyNumbersDirective } from '../directives/only-numbers.directive';
import { EqualHeightDirective } from '../directives/equal-height.directive';
import { SortByFieldPipe } from '../pipes/sortByField.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HighlightModule, FormsModule, HttpClientModule],
  exports: [
    HighlightModule,
    FormsModule,
    RippleButtonDirective,
    OnlyNumbersDirective,
    EqualHeightDirective,
    SortByFieldPipe
  ],
  declarations: [RippleButtonDirective, OnlyNumbersDirective, EqualHeightDirective, SortByFieldPipe],
  providers: []
})
export class SharedModule {}
