import { Directive, ElementRef, Input, OnInit } from '@angular/core'; 

@Directive({
  selector: '[appMensajeValidacion]' // El selector es el atributo que se va a utilizar en el template
})
export class MensajeValidacionDirective implements OnInit { // Implementamos OnInit para poder utilizar el método ngOnInit()
  @Input() appMensajeValidacion!: boolean; // El @Input() nos permite recibir un valor desde el template
  @Input() mensaje!: string; // El @Input() nos permite recibir un valor desde el template

  constructor(private el: ElementRef) {} // El ElementRef nos permite acceder al elemento HTML que se encuentra en el template

  ngOnInit() { // El ngOnInit() se ejecuta después de que se ha creado el componente
    if (!this.appMensajeValidacion) { // Si el valor de appMensajeValidacion es falso
      this.el.nativeElement.style.display = 'none'; // Ocultamos el elemento HTML
    } else {
      this.el.nativeElement.style.display = 'block'; // Mostramos el elemento HTML
      this.el.nativeElement.textContent = this.mensaje; // Establecemos el texto del elemento HTML
      this.el.nativeElement.style.color = 'red'; // Establecemos el color del texto del elemento HTML
    }
  }
}
