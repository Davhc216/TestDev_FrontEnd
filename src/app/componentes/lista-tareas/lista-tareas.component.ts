import { Component } from '@angular/core';
import { ResaltarTareaDirective } from '../../directivas/resaltar-tarea.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
  standalone: true,
  imports: [ResaltarTareaDirective, CommonModule, FormsModule],
})
export class ListaTareasComponent {
  tareas = [
    { nombre: 'Tarea 1', fechaVencimiento: '2024-12-25', prioridad: 'alta' },
    { nombre: 'Tarea 2', fechaVencimiento: '2024-12-30', prioridad: 'media' },
    { nombre: 'Tarea 3', fechaVencimiento: '', prioridad: 'baja' },
  ];

  nuevaTarea = { nombre: '', fechaVencimiento: '', prioridad: 'media' };

  agregarTarea(): void {
    this.tareas.push({
      ...this.nuevaTarea,
      fechaVencimiento: this.nuevaTarea.fechaVencimiento,
    });
    this.nuevaTarea = { nombre: '', fechaVencimiento: '', prioridad: 'media' };
  }

  editarTarea(tarea: any): void {
    console.log('Editar tarea:', tarea);
  }

  eliminarTarea(tarea: any): void {
    this.tareas = this.tareas.filter((t) => t !== tarea);
  }
}
