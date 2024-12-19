import { ClaseCondicionalDirective } from "./clase-condicional.directive";
import { MockElementRef } from '../mock/element-ref.mock';

describe('ClaseCondicionalDirective', () => {
  let mockElementRef: any;
  let mockRenderer: any;

  beforeEach(() => {
    mockElementRef = { nativeElement: document.createElement('div') };
    mockRenderer = jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass']);
  });

  it('should add "claseVerdadero" when condicion is true', () => {
    const directive = new ClaseCondicionalDirective(mockElementRef, mockRenderer);
    directive.condicion = true;
    directive.claseVerdadero = 'completada';
    directive.claseFalso = 'pendiente';

    directive.ngOnChanges();

    expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElementRef.nativeElement, 'completada');
    expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElementRef.nativeElement, 'pendiente');
  });
});
