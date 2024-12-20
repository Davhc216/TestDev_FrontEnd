import { ResaltarTareaDirective } from './resaltar-tarea.directive';

describe('ResaltarTareaDirective', () => {
  let mockElementRef: any;

  beforeEach(() => {
    mockElementRef = { nativeElement: document.createElement('div') };
  });

  it('should apply red background for expired tasks', () => {
    const directive = new ResaltarTareaDirective(mockElementRef);
    const fechaVencida = new Date(Date.now() - 24 * 60 * 60 * 1000); // Ayer

    // Simular cambios en @Input
    directive.resaltarTarea = fechaVencida.toISOString();
    directive.ngOnChanges({
      resaltarTarea: {
        currentValue: fechaVencida.toISOString(),
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true,
      },
    });

    expect(mockElementRef.nativeElement.style.backgroundColor).toBe('red');
    expect(mockElementRef.nativeElement.style.color).toBe('white');
  });

  it('should apply green background for non-expired tasks', () => {
    const directive = new ResaltarTareaDirective(mockElementRef);
    const fechaFutura = new Date(Date.now() + 24 * 60 * 60 * 1000); // Mañana

    // Simular cambios en @Input
    directive.resaltarTarea = fechaFutura.toISOString();
    directive.ngOnChanges({
      resaltarTarea: {
        currentValue: fechaFutura.toISOString(),
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true,
      },
    });

    expect(mockElementRef.nativeElement.style.backgroundColor).toBe('green');
    expect(mockElementRef.nativeElement.style.color).toBe('white');
  });
});
