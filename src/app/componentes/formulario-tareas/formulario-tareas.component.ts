import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MensajeValidacionDirective } from '../../directivas/mensaje-validacion.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-tareas',
  templateUrl: './formulario-tareas.component.html',
  styleUrls: ['./formulario-tareas.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MensajeValidacionDirective, CommonModule],
})
export class FormularioTareasComponent {
  @Output() agregar = new EventEmitter<any>();
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      fechaVencimiento: ['', Validators.required],
    });
  }

  guardarTarea(): void {
    if (this.formulario.valid) {
      this.agregar.emit(this.formulario.value);
      this.formulario.reset();
    }
  }
}
