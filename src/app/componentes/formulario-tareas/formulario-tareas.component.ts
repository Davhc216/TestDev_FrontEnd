import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MensajeValidacionDirective } from '../../directivas/mensaje-validacion.directive';

@Component({
  selector: 'app-formulario-tareas',
  standalone: true,
  imports: [ReactiveFormsModule, MensajeValidacionDirective],
  templateUrl: './formulario-tareas.component.html',
  styleUrls: ['./formulario-tareas.component.scss']
})
export class FormularioTareasComponent {
  formularioTareas = this.fb.group({
    nombre: ['', Validators.required],
    fechaVencimiento: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  guardarTarea() {
    if (this.formularioTareas.valid) {
      console.log('Tarea guardada:', this.formularioTareas.value);
    }
  }
}
