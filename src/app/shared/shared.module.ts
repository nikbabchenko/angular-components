import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [HighlightModule, FormsModule],
  exports: [HighlightModule, FormsModule],
  declarations: [],
  providers: []
})
export class SharedModule {}
