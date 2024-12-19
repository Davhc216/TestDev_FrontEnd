import { MensajeValidacionDirective } from './mensaje-validacion.directive';
import { MockElementRef } from '../mock/element-ref.mock';

describe('MensajeValidacionDirective', () => {
  it('should create an instance', () => {
    // Usamos MockElementRef para proporcionar un simulacro de ElementRef
    const mockElementRef = new MockElementRef();
    const directive = new MensajeValidacionDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });

  it('should display the message when appMensajeValidacion is true', () => {
    // Usamos MockElementRef para el simulacro
    const mockElementRef = new MockElementRef();
    const directive = new MensajeValidacionDirective(mockElementRef);

    directive.appMensajeValidacion = true;
    directive.mensaje = 'Campo requerido';
    directive.ngOnChanges();

    expect(mockElementRef.nativeElement.style.display).toBe('block'); // Verifica que el mensaje esté visible
    expect(mockElementRef.nativeElement.textContent).toBe('Campo requerido'); // Verifica el texto del mensaje
    expect(mockElementRef.nativeElement.style.color).toBe('red'); // Verifica el color del texto
  });

  it('should hide the message when appMensajeValidacion is false', () => {
    // Usamos MockElementRef para el simulacro
    const mockElementRef = new MockElementRef();
    const directive = new MensajeValidacionDirective(mockElementRef);

    directive.appMensajeValidacion = false;
    directive.ngOnChanges();

    expect(mockElementRef.nativeElement.style.display).toBe('none'); // Verifica que el mensaje esté oculto
  });
});