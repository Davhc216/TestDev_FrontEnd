import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoTareasComponent } from './elemento-tareas.component';

describe('ElementoTareasComponent', () => {
  let component: ElementoTareasComponent;
  let fixture: ComponentFixture<ElementoTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementoTareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
