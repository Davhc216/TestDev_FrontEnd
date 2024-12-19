import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MensajeValidacionDirective } from '../../directivas/mensaje-validacion.directive';

@Component({
  selector: 'app-formulario-tareas',
  standalone: true,
  imports: [ReactiveFormsModule, MensajeValidacionDirective],
  templateUrl: './formulario-tareas.component.html',
  styleUrls: ['./formulario-tareas.component.scss']
})
export class FormularioTareasComponent implements OnInit {
  formularioTareas: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario
    this.formularioTareas = this.fb.group({
      nombre: ['', Validators.required],
      fechaVencimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get esNombreInvalido(): boolean {
    return !!this.formularioTareas.get('nombre')?.invalid;
  }
  
  get esFechaVencimientoInvalida(): boolean {
    return !!this.formularioTareas.get('fechaVencimiento')?.invalid;
  }  

  guardarTarea(): void {
    if (this.formularioTareas.valid) {
      console.log('Tarea guardada:', this.formularioTareas.value);
    }
  }
}
