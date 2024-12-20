import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

/**
 * Directiva para aplicar una clase CSS dinámica basada en un valor de entrada.
 * - `appClaseCondicional`: El valor que determina la clase CSS a aplicar.
 */
@Directive({
  selector: '[appClaseCondicional]',
  standalone: true
})
export class ClaseCondicionalDirective implements OnChanges {
  @Input() appClaseCondicional!: string; // El valor que define la clase a aplicar

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (!this.appClaseCondicional) {
      console.error('ClaseCondicionalDirective: El valor de appClaseCondicional no está definido.');
      return;
    }

    // Limpiar cualquier clase existente
    this.renderer.removeAttribute(this.el.nativeElement, 'class');

    // Aplicar la nueva clase basada en el valor de appClaseCondicional
    const clase = `prioridad-${this.appClaseCondicional.toLowerCase()}`;
    this.renderer.addClass(this.el.nativeElement, clase);
  }
}
