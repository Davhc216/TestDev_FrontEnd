import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-elemento-tareas',
  templateUrl: './elemento-tareas.component.html',
  styleUrls: ['./elemento-tareas.component.scss']
})
export class ElementoTareasComponent {
  @Input() tarea: any; // Recibe datos del componente padre
  @Output() editar = new EventEmitter<any>(); // Emite un evento cuando se edite la tarea
  @Output() eliminar = new EventEmitter<any>(); // Emite un evento cuando se elimine la tarea

  editarTarea(): void {
    this.editar.emit(this.tarea); // Emite el evento con los datos de la tarea
  }

  eliminarTarea(): void {
    this.eliminar.emit(this.tarea); // Emite el evento con los datos de la tarea
  }
}
