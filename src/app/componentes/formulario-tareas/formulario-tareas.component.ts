import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MensajeValidacionDirective } from '../../directivas/mensaje-validacion.directive';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-tareas',
=======
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-formulario-tareas',
  standalone: true,
  imports: [ReactiveFormsModule, MensajeValidacionDirective, CommonModule],
>>>>>>> front
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

<<<<<<< HEAD
=======
  ngOnInit(): void {}

  get esNombreInvalido(): boolean {
    return !!this.formularioTareas.get('nombre')?.invalid;
  }

  get esFechaVencimientoInvalida(): boolean {
    return !!this.formularioTareas.get('fechaVencimiento')?.invalid;
  }

>>>>>>> front
  guardarTarea(): void {
    if (this.formulario.valid) {
      this.agregar.emit(this.formulario.value);
      this.formulario.reset();
    }
  }
}
