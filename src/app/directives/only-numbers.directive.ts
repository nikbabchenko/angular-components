import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[usOnlyNumbers]'
})
export class OnlyNumbersDirective {
  @HostListener('paste', ['$event'])
  onPaste(event) {
    if (event.clipboardData && event.clipboardData.getData) {
      let value;
      if ((window as any).clipboardData && (window as any).clipboardData.getData) {
        // IE
        value = (window as any).clipboardData.getData('Text');
      } else if (event.clipboardData && event.clipboardData.getData) {
        value = event.clipboardData.getData('text/plain');
      }
      this.preventIllegalInput(value, event);
    }
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    this.preventIllegalInput(event.key, event);
  }

  private preventIllegalInput(value: string, event: KeyboardEvent) {
    if (!/^[0-9]+$/.test(value)) {
      if (event.key !== 'Enter') {
        event.preventDefault();
      }
    }
  }
}
