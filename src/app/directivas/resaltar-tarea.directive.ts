import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[resaltarTarea]',
  standalone: true
})
export class ResaltarTareaDirective implements OnChanges {
  @Input() resaltarTarea: string = '';

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    this.el.nativeElement.style.backgroundColor =
      this.resaltarTarea === 'alta' ? 'red' : this.resaltarTarea === 'media' ? 'yellow' : 'green';
  }
}
