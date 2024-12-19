import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClaseCondicional]' // selector para el atributo
})
export class ClaseCondicionalDirective implements OnChanges { // implementa la interfaz OnChanges
  @Input() condicion!: boolean; // atributo condicion que se puede pasar desde el componente padre
  @Input() claseVerdadero!: string; // atributo claseVerdadero que se puede pasar desde el componente padre
  @Input() claseFalso!: string; // atributo claseFalso que se puede pasar desde el componente padre

  constructor(private el: ElementRef, private renderer: Renderer2) {} // inyecta el ElementRef y el Renderer2

  ngOnChanges() { // método que se ejecuta cuando se detecta un cambio en los inputs
    if (this.condicion) { // si la condicion es verdadera
      this.renderer.addClass(this.el.nativeElement, this.claseVerdadero); // agrega la clase verdadera
      this.renderer.removeClass(this.el.nativeElement, this.claseFalso); // elimina la clase falsa
    } else {
      this.renderer.addClass(this.el.nativeElement, this.claseFalso); // agrega la clase falsa
      this.renderer.removeClass(this.el.nativeElement, this.claseVerdadero); // elimina la clase verdadera
    }
  }
}
