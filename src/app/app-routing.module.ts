import { Routes } from '@angular/router';
import { TareasComponent } from './modulos/tareas/tareas.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tareas', component: TareasComponent },
  { path: '**', redirectTo: 'dashboard' },
];
