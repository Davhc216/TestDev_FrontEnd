import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent {
  tareas = [
    { nombre: 'Tarea 1', fechaVencimiento: '2024-12-25' },
    { nombre: 'Tarea 2', fechaVencimiento: '2024-12-30' }
  ];

  agregarTarea(tarea: any): void {
    this.tareas.push(tarea); // Agrega la nueva tarea a la lista
  }

  editarTarea(tarea: any): void {
    console.log('Editar tarea:', tarea);
    // Lógica para editar la tarea
  }

  eliminarTarea(tarea: any): void {
    this.tareas = this.tareas.filter(t => t !== tarea); // Elimina la tarea de la lista
  }
}
