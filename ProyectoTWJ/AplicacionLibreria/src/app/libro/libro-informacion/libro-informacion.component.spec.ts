import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroInformacionComponent } from './libro-informacion.component';

describe('LibroInformacionComponent', () => {
  let component: LibroInformacionComponent;
  let fixture: ComponentFixture<LibroInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
