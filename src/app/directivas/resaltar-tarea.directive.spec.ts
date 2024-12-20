import { ResaltarTareaDirective } from './resaltar-tarea.directive';
import { MockElementRef } from '../mock/element-ref.mock';

describe('ResaltarTareaDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new MockElementRef();
    const directive = new ResaltarTareaDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });

  it('should set background color to red if the date has passed', () => {
    const mockElementRef = new MockElementRef();
    const directive = new ResaltarTareaDirective(mockElementRef);

    directive.resaltarTarea = '2023-12-01'; // Fecha pasada
    directive.ngOnChanges({ resaltarTarea: { currentValue: '2023-12-01', previousValue: null, firstChange: true, isFirstChange: () => true } });

    expect(mockElementRef.nativeElement.style.backgroundColor).toBe('red');
  });

  it('should set background color to green if the date is in the future', () => {
    const mockElementRef = new MockElementRef();
    const directive = new ResaltarTareaDirective(mockElementRef);

    directive.resaltarTarea = '2024-12-25'; // Fecha futura
    directive.ngOnChanges({ resaltarTarea: { currentValue: '2024-12-25', previousValue: null, firstChange: true, isFirstChange: () => true } });

    expect(mockElementRef.nativeElement.style.backgroundColor).toBe('green');
  });
});
