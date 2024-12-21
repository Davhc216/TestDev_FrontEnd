import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MensajeValidacionDirective } from '../../directivas/mensaje-validacion.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-tareas',
  standalone: true,
  templateUrl: './formulario-tareas.component.html',
  styleUrls: ['./formulario-tareas.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, MensajeValidacionDirective], // Incluye la directiva
})
export class FormularioTareasComponent {
  @Output() nuevaTarea = new EventEmitter<any>();
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      fechaVencimiento: ['', Validators.required],
    });
  }

  guardarTarea(): void {
    if (this.formulario.valid) {
      const tarea = { ...this.formulario.value, id: Date.now() };
      this.nuevaTarea.emit(tarea); // Emitir tarea al componente padre
      this.formulario.reset();
    }
  }
}
