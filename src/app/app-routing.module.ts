import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./modulos/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'tareas',
    loadComponent: () =>
      import('./modulos/tareas/tareas.component').then((m) => m.TareasComponent),
  },
  { path: '**', redirectTo: 'dashboard' },
];
