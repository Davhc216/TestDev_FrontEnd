import { Component } from '@angular/core';
import { ResaltarTareaDirective } from '../../directivas/resaltar-tarea.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
  standalone: true,
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
  
  editarTarea(tarea: any): void {
    console.log('Editar tarea:', tarea);
  }

  eliminarTarea(tarea: any): void {
    console.log('Eliminar tarea:', tarea);
  }
}
