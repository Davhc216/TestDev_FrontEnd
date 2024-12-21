import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private tareas = [
    { id: 1, nombre: 'Tarea 1', prioridad: 'alta', fechaVencimiento: '2024-12-30' },
    { id: 2, nombre: 'Tarea 2', prioridad: 'media', fechaVencimiento: '2024-12-31' },
  ];

  constructor() {}

  obtenerTareas(): Observable<any[]> {
    return of(this.tareas); // Simula una respuesta HTTP con RxJS
  }

  agregarTarea(tarea: any): void {
    this.tareas.push(tarea);
  }
}
