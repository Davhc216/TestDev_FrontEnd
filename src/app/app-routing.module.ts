import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirección por defecto
  { path: 'home', loadChildren: () => import('./modulos/home/home.module').then(m => m.HomeModule) }, // Carga el módulo de home
  { path: 'dashboard', loadChildren: () => import('./modulos/dashboard/dashboard.module').then(m => m.DashboardModule) }, // Carga el módulo de dashboard
  { path: 'tareas', loadChildren: () => import('./modulos/tareas/tareas.module').then(m => m.TareasModule) } // Carga el módulo de tareas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas principales
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en otros módulos
})
export class AppRoutingModule { }
