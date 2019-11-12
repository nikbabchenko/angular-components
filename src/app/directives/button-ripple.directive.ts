import { Directive, Renderer2, ElementRef, HostListener, OnInit } from '@angular/core';

const styles = `
.is-material {
  overflow: hidden;
  position: relative;
}

.ripple {
  border-radius: 50%;
  background: rgba(255,255,255, 0.7);
  position: absolute;
  transform: scale(0);
  animation: ripple 0.5s linear;
}

@keyframes ripple {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
`;

@Directive({
  selector: '[usRippleButton]'
})
export class RippleButtonDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.addStyle(styles, 'usRippleButton');
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    const elemRenderer = this.renderer;
    const el: HTMLButtonElement = this.el.nativeElement;
    const innerCircle = el.querySelector('.ripple');

    if (!el.classList.contains('is-material')) {
      elemRenderer.addClass(el, 'is-material');
    }

    if (innerCircle) {
      el.removeChild(innerCircle);
    }

    const circle = document.createElement('div');
    const d = Math.max(el.clientWidth, el.clientHeight);

    const elRect = el.getBoundingClientRect();
    circle.style.width = circle.style.height = `${d}px`;
    circle.style.left = `${e.clientX - elRect.left - d / 2}px`;
    circle.style.top = `${e.clientY - elRect.top - d / 2}px`;
    el.appendChild(circle);
    circle.classList.add('ripple');
  }

  addStyle(elStyles: string, attribute: string) {
    if (document.head.querySelector(`style[${attribute}]`)) {
      return;
    }

    const style = this.renderer.createElement('style');

    this.renderer.setProperty(style, 'textContent', elStyles);
    this.renderer.setAttribute(style, attribute, '');

    document.head.appendChild(style);
  }
}
