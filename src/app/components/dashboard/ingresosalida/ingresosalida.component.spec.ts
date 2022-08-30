import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosalidaComponent } from './ingresosalida.component';

describe('IngresosalidaComponent', () => {
  let component: IngresosalidaComponent;
  let fixture: ComponentFixture<IngresosalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
