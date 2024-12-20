// Este archivo integra los cambios realizados en ambas ramas: desarrollo y front.

import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[resaltarTarea]',
  standalone: true
})
export class ResaltarTareaDirective implements OnChanges {
  @Input() resaltarTarea!: string | Date; // Admite tanto cadenas como fechas

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resaltarTarea']) {
      const valor = changes['resaltarTarea'].currentValue;

      if (typeof valor === 'string' && !isNaN(Date.parse(valor))) {
        const vencimiento = new Date(valor);
        const ahora = new Date();
      
        if (vencimiento < ahora) {
          this.el.nativeElement.style.backgroundColor = 'red';
          this.el.nativeElement.style.color = 'white';
        } else {
          this.el.nativeElement.style.backgroundColor = 'green';
          this.el.nativeElement.style.color = 'white';
        }
      }
    }
  }
}
