import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule(
    {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule // Configuración inicial de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
    }
)

export class AppModule { }