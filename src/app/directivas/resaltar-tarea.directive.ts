import { Directive, ElementRef, Input, OnChanges } from '@angular/core'; 

@Directive({
  selector: '[appResaltarTarea]' // selector para el atributo
})
export class ResaltarTareaDirective implements OnChanges { // implementa la interfaz OnChanges
  @Input() appResaltarTarea!: Date; // el atributo que se va a pasar desde el componente padre

  constructor(private el: ElementRef) {} // inyecta el ElementRef para acceder al elemento HTML

  ngOnChanges() { // método que se llama cuando se produce un cambio en el componente
    const ahora = new Date(); // obtiene la fecha actual
    const vencimiento = new Date(this.appResaltarTarea); // convierte la fecha de vencimiento a Date

    if (vencimiento < ahora) { // si la fecha de vencimiento es menor que la fecha actual
    this.el.nativeElement.style.backgroundColor = 'red'; // cambia el color de fondo del elemento a rojo
      this.el.nativeElement.style.color = 'white'; // cambia el color del texto a blanco
    } else {
      this.el.nativeElement.style.backgroundColor = 'green'; // cambia el color de fondo del elemento a verde
      this.el.nativeElement.style.color = 'white'; // cambia el color del texto a blanco
    }
  }
}
