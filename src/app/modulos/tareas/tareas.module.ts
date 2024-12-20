import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas.component';
import { TareasRoutingModule } from './tareas-routing.module'; // Importa el módulo de enrutamiento

@NgModule({
  declarations: [TareasComponent], // Declara el componente
  imports: [CommonModule, TareasRoutingModule], // Importa CommonModule y TareasRoutingModule
  exports: [TareasComponent] // Exporta el componente si otros módulos lo usan
})
export class TareasModule {}
