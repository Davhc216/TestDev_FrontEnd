import { Component } from '@angular/core';
<<<<<<< HEAD
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { DirectivasModule } from './directive.module';
=======
import { RouterModule } from '@angular/router';
>>>>>>> front

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [ListaTareasComponent, DirectivasModule],
  template: '<app-lista-tareas></app-lista-tareas>',
  styleUrls: ['./app.component.scss'],
=======
  imports: [RouterModule], // Importa el RouterModule para usar el enrutador
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
>>>>>>> front
})
export class AppComponent { }
