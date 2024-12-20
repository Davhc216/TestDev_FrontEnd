import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms'; // Importar para formularios
import { CommonModule } from '@angular/common'; // Funciones comunes

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Formularios reactivos
    CommonModule, // Utilidades comunes
  ],
  bootstrap: [],
=======

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: []
>>>>>>> front
})
export class AppModule {}
