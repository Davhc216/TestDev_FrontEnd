import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; 
import { ResaltarTareaDirective } from './directivas/resaltar-tarea.directive';
import { MensajeValidacionDirective } from './directivas/mensaje-validacion.directive';
import { ClaseCondicionalDirective } from './directivas/clase-condicional.directive'; 


@NgModule({
  declarations: [ 
    ResaltarTareaDirective,  
    MensajeValidacionDirective,
    ClaseCondicionalDirective
  ], 
  imports: [
    BrowserModule, // Proporciona funcionalidades básicas del navegador
    RouterModule, // Permite el uso de rutas
    AppRoutingModule // Importa las rutas principales de la aplicación
  ],
  providers: [],  
})

export class AppModule { }
