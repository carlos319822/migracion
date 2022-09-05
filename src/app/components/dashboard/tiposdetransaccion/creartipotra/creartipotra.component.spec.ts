import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreartipotraComponent } from './creartipotra.component';

describe('CreartipotraComponent', () => {
  let component: CreartipotraComponent;
  let fixture: ComponentFixture<CreartipotraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreartipotraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreartipotraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
