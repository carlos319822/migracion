import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizarpedidoComponent } from './autorizarpedido.component';

describe('AutorizarpedidoComponent', () => {
  let component: AutorizarpedidoComponent;
  let fixture: ComponentFixture<AutorizarpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizarpedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
