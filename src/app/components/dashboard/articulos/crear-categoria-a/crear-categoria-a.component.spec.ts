import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCategoriaAComponent } from './crear-categoria-a.component';

describe('CrearCategoriaAComponent', () => {
  let component: CrearCategoriaAComponent;
  let fixture: ComponentFixture<CrearCategoriaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCategoriaAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCategoriaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
