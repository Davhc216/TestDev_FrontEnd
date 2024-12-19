import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
  declarations: [], 
  imports: [
    BrowserModule, // Proporciona funcionalidades básicas del navegador
    RouterModule, // Permite el uso de rutas
    AppRoutingModule // Importa las rutas principales de la aplicación
  ],
  providers: [],  
})

export class AppModule { }
