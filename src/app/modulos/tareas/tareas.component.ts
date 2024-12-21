import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../servicios/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent implements OnInit {
  tareas: any[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.tareasService.obtenerTareas().subscribe((tareas) => {
      this.tareas = tareas;
    });
  }

  agregarTarea(tarea: any): void {
    this.tareasService.agregarTarea(tarea);
    this.tareas.push(tarea);
  }
}
