import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ClaseCondicionalDirective } from '../../directivas/clase-condicional.directive';

@Component({
  selector: 'app-elemento-tareas',
  standalone: true,
  imports: [CommonModule, ClaseCondicionalDirective], // Agrega CommonModule aquí
  templateUrl: './elemento-tareas.component.html',
  styleUrls: ['./elemento-tareas.component.scss']
})
export class ElementoTareasComponent {
  tarea = { 
    nombre: 'Tarea 1', 
    fechaVencimiento: new Date('2024-12-25') 
  };

  isVencida(tarea: any): boolean {
    const hoy = new Date();
    return tarea.fechaVencimiento < hoy;
  }

  eliminarTarea(): void {
    console.log(`Tarea eliminada: ${this.tarea.nombre}`);
    // Aquí puedes implementar la lógica para eliminar la tarea
  }
}
