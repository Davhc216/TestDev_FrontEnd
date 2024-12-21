import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private tareas = [
    { id: 1, nombre: 'Tarea 1', prioridad: 'alta', fechaVencimiento: '2024-12-30' },
    { id: 2, nombre: 'Tarea 2', prioridad: 'media', fechaVencimiento: '2024-12-31' },
  ];

  private apiUrl = 'https://api.example.com/tareas'; // URL de API de ejemplo

  constructor(private tareasService: TareasService) {}

  obtenerTareas(): Observable<any[]> {
    const tareas = localStorage.getItem('tareas');
    if (tareas) {
      return of(JSON.parse(tareas));
    }
    return of(this.tareas); // Cargar datos iniciales
  }

  guardarTareas(): void {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  agregarTarea(tarea: any): Observable<any> {
    this.tareas.push({ ...tarea, id: new Date().getTime() }); // Genera un ID único.
    this.guardarTareas();
    return of(tarea);
  }


  actualizarTarea(id: number, tarea: any): Observable<any> {
    const index = this.tareas.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.tareas[index] = tarea;
      this.guardarTareas();
    }
    return of(tarea); // Simular respuesta HTTP
  }

  eliminarTarea(id: number): Observable<any> {
    this.tareas = this.tareas.filter((t) => t.id !== id);
    this.guardarTareas();
    return of(null); // Simular respuesta HTTP
  }

  
}
