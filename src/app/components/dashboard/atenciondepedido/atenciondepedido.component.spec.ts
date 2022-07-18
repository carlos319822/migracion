import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtenciondepedidoComponent } from './atenciondepedido.component';

describe('AtenciondepedidoComponent', () => {
  let component: AtenciondepedidoComponent;
  let fixture: ComponentFixture<AtenciondepedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtenciondepedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtenciondepedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
