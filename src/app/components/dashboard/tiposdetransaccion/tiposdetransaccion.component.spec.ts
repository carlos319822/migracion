import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposdetransaccionComponent } from './tiposdetransaccion.component';

describe('TiposdetransaccionComponent', () => {
  let component: TiposdetransaccionComponent;
  let fixture: ComponentFixture<TiposdetransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposdetransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposdetransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
