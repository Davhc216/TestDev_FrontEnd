import { ElementRef } from '@angular/core';

export class MockElementRef implements ElementRef {
  nativeElement: any;

  constructor() {
    this.nativeElement = document.createElement('div'); // Simula un elemento HTML
  }
}