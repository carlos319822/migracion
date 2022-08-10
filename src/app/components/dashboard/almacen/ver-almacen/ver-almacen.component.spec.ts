import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAlmacenComponent } from './ver-almacen.component';

describe('VerAlmacenComponent', () => {
  let component: VerAlmacenComponent;
  let fixture: ComponentFixture<VerAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
