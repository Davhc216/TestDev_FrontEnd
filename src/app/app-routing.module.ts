import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modulos/home/home.module').then(m => m.HomeModule) },
  { path: 'dashboard', loadChildren: () => import('./modulos/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'tareas', loadChildren: () => import('./modulos/tareas/tareas.module').then(m => m.TareasModule) }, // Usar el módulo
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
