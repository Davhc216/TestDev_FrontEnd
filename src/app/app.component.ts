import { Component } from '@angular/core';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTareasComponent], // Usa ListaTareasComponent como hijo
  template: '<app-lista-tareas></app-lista-tareas>', // Usa el selector de ListaTareasComponent
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {}
