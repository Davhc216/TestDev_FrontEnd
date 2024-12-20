import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, CommonModule],
  bootstrap: [],
})
export class AppModule {}
