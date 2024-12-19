import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResaltarTareaDirective } from '../../directivas/resaltar-tarea.directive';

@Component({
  selector: 'app-lista-tareas', 
  standalone: true, 
  imports: [CommonModule, ResaltarTareaDirective], // Importa directamente la directiva standalone
  templateUrl: './lista-tareas.component.html', 
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent {
  tareas = [
    { nombre: 'Tarea 1', fechaVencimiento: new Date('2024-12-25') },
    { nombre: 'Tarea 2', fechaVencimiento: new Date('2024-12-10') }
  ];
}
