import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

/**
 * Directiva para mostrar mensajes de validación en el formulario.
 * - `appMensajeValidacion`: Indica si se debe mostrar el mensaje.
 * - `mensaje`: Texto que se mostrará como mensaje de error.
 */
@Directive({
  selector: '[appMensajeValidacion]',
  standalone: true
})
export class MensajeValidacionDirective implements OnChanges {
  @Input() appMensajeValidacion: boolean = false; // Indica si se debe mostrar el mensaje
  @Input() mensaje!: string; // Texto del mensaje

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.appMensajeValidacion) {
      this.el.nativeElement.style.display = 'block';
      this.el.nativeElement.textContent = this.mensaje;
      this.el.nativeElement.style.color = 'red';
    } else {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
