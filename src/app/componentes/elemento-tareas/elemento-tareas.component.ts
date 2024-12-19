import { Component } from '@angular/core';
import { ClaseCondicionalDirective } from '../../directivas/clase-condicional.directive';

@Component({
  selector: 'app-elemento-tareas',
  standalone: true,
  imports: [ClaseCondicionalDirective],
  templateUrl: './elemento-tareas.component.html',
  styleUrls: ['./elemento-tareas.component.scss']
})
export class ElementoTareasComponent {
  tarea = { nombre: 'Tarea 1', completada: true };
}
