import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidodearticuloComponent } from './pedidodearticulo.component';

describe('PedidodearticuloComponent', () => {
  let component: PedidodearticuloComponent;
  let fixture: ComponentFixture<PedidodearticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidodearticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidodearticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
