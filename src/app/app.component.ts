import { Component } from '@angular/core'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true, // Marca el componente como standalone
  imports:[RouterModule], // Importa el módulo de rutas
  templateUrl: './app.component.html', // Ruta del archivo HTML
  styleUrls: ['./app.component.scss'] // Ruta del archivo CSS
})
export class AppComponent {
  title = 'TestDev_FrontEnd'; // Titulo de la aplicación
}
