import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent } // Ruta principal del módulo
];

@NgModule({
  declarations: [DashboardComponent], // Declaración del componente del módulo
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Configuración de rutas del módulo
  ]
})
export class DashboardModule { }
