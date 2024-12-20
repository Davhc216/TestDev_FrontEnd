import { Component } from '@angular/core';
import { ResaltarTareaDirective } from '../../directivas/resaltar-tarea.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
  standalone: true,
  imports: [ResaltarTareaDirective, CommonModule, FormsModule], // Agregar FormsModule
})
export class ListaTareasComponent {
  tareas = [
    { nombre: 'Tarea 1', fechaVencimiento: '2024-12-25', prioridad: 'alta' },
    { nombre: 'Tarea 2', fechaVencimiento: '2024-12-30', prioridad: 'media' },
  ];

  nuevaTarea = { nombre: '', fechaVencimiento: '', prioridad: 'media' };

  agregarTarea(): void {
    this.tareas.push({
      ...this.nuevaTarea,
      fechaVencimiento: this.nuevaTarea.fechaVencimiento, // Mantener como string
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
