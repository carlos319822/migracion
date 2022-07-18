import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegarautoridadComponent } from './delegarautoridad.component';

describe('DelegarautoridadComponent', () => {
  let component: DelegarautoridadComponent;
  let fixture: ComponentFixture<DelegarautoridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegarautoridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegarautoridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
