import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../servicios/tareas.service';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent {
  tareas: any[] = [];
  nuevaTarea = { nombre: '', fechaVencimiento: '' };

  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }
  
  cargarTareas(): void {
    this.tareasService.obtenerTareas().subscribe((tareas) => {
      this.tareas = tareas || [];
    });
  }

  agregarTarea(): void {
    if (this.nuevaTarea.nombre && this.nuevaTarea.fechaVencimiento) {
      const nuevaTareaConId = {
        ...this.nuevaTarea,
        id: new Date().getTime(), // Generar un ID único.
      };

      this.tareasService.agregarTarea(nuevaTareaConId).subscribe((tarea) => {
        this.tareas.push(tarea);
        this.nuevaTarea = { nombre: '', fechaVencimiento: '' };
      });
    }
  }

  eliminarTarea(id: number): void {
    this.tareasService.eliminarTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter((t) => t.id !== id);
    });
  }
}
