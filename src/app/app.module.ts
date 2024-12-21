import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [provideHttpClient()],
  bootstrap: [],
})
export class AppModule {}
