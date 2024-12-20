import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

/**
 * Directiva para aplicar clases CSS dinámicas en función de una condición.
 * - `condicion`: La condición evaluada.
 * - `claseVerdadero`: Clase CSS si la condición es verdadera.
 * - `claseFalso`: Clase CSS si la condición es falsa.
 */
@Directive({
  selector: '[appClaseCondicional]',
  standalone: true
})
export class ClaseCondicionalDirective implements OnChanges {
  @Input() condicion!: boolean;
  @Input() claseVerdadero!: string;
  @Input() claseFalso!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.condicion === undefined || this.claseVerdadero === undefined || this.claseFalso === undefined) {
      console.error('ClaseCondicionalDirective: Uno o más inputs no están definidos.');
      return;
    }
  
    if (this.condicion) {
      this.renderer.addClass(this.el.nativeElement, this.claseVerdadero);
      this.renderer.removeClass(this.el.nativeElement, this.claseFalso);
    } else {
      this.renderer.addClass(this.el.nativeElement, this.claseFalso);
      this.renderer.removeClass(this.el.nativeElement, this.claseVerdadero);
    }
  }
  
}
