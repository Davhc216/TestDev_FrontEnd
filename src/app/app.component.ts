import { Component } from '@angular/core';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { DirectivasModule } from './directive.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTareasComponent, DirectivasModule],
  template: '<app-lista-tareas></app-lista-tareas>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent { }
