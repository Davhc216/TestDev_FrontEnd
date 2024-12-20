import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-tareas',
  templateUrl: './formulario-tareas.component.html',
  styleUrls: ['./formulario-tareas.component.scss']
})
export class FormularioTareasComponent {
  @Output() agregar = new EventEmitter<any>(); // Emite una nueva tarea
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      fechaVencimiento: ['', Validators.required]
    });
  }

  guardarTarea(): void {
    if (this.formulario.valid) {
      this.agregar.emit(this.formulario.value); // Emite los datos del formulario
      this.formulario.reset(); // Resetea el formulario después de agregar
    }
  }
}
