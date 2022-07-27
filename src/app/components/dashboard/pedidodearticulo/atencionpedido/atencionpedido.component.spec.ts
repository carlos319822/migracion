import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionpedidoComponent } from './atencionpedido.component';

describe('AtencionpedidoComponent', () => {
  let component: AtencionpedidoComponent;
  let fixture: ComponentFixture<AtencionpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionpedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
