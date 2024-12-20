import { Component } from '@angular/core';
import { ResaltarTareaDirective } from '../../directivas/resaltar-tarea.directive';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'; // Importar FormsModule
=======
>>>>>>> front

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
  standalone: true,
<<<<<<< HEAD
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

=======
  imports: [ResaltarTareaDirective,CommonModule]
})
export class ListaTareasComponent {
  tareas = [
    { nombre: 'Tarea 1', prioridad: 'alta' },
    { nombre: 'Tarea 2', prioridad: 'media' },
    { nombre: 'Tarea 3', prioridad: 'baja' }
  ];

  agregarTarea(tarea: any) {
    this.tareas.push(tarea);
  }
  
>>>>>>> front
  editarTarea(tarea: any): void {
    console.log('Editar tarea:', tarea);
  }

  eliminarTarea(tarea: any): void {
<<<<<<< HEAD
    this.tareas = this.tareas.filter((t) => t !== tarea);
=======
    console.log('Eliminar tarea:', tarea);
>>>>>>> front
  }
}
