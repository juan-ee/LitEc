import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroMostrarComponent } from './libro-mostrar.component';

describe('LibroMostrarComponent', () => {
  let component: LibroMostrarComponent;
  let fixture: ComponentFixture<LibroMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
