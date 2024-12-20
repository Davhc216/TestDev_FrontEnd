import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirección inicial a 'home'
  { path: 'dashboard', loadChildren: () => import('./modulos/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'tareas', loadChildren: () => import('./modulos/tareas/tareas.module').then(m => m.TareasModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
