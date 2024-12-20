import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClaseCondicionalDirective } from '../../directivas/clase-condicional.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elemento-tareas',
  templateUrl: './elemento-tareas.component.html',
  styleUrls: ['./elemento-tareas.component.scss'],
  standalone: true,
  imports: [ClaseCondicionalDirective,CommonModule],
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

  isVencida(tarea: any): boolean {
    const fechaActual = new Date();
    const fechaVencimiento = new Date(tarea.fechaVencimiento);
    return fechaVencimiento < fechaActual;
  }
}
