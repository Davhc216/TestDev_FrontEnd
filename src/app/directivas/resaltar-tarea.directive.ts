import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[resaltarTarea]',
  standalone: true,
})
export class ResaltarTareaDirective implements OnChanges { // Implementa OnChanges
  @Input() resaltarTarea!: string | Date; // Permite recibir tanto string como Date

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void { // Implementación explícita
    if (changes['resaltarTarea']) {
      const valor = changes['resaltarTarea'].currentValue;
      const vencimiento = new Date(valor); // Convierte siempre a Date
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
