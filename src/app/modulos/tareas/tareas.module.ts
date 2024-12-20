import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule si es necesario
import { TareasComponent } from './tareas.component';

@NgModule({
  declarations: [TareasComponent], // Declarar el componente aquí
  imports: [CommonModule], // Importar CommonModule para directivas como *ngIf y *ngFor
  exports: [TareasComponent],  // Exportar el componente para que otros módulos puedan usarlo
})
export class TareasModule {}
