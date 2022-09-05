import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupodeaccesoComponent } from './grupodeacceso.component';

describe('GrupodeaccesoComponent', () => {
  let component: GrupodeaccesoComponent;
  let fixture: ComponentFixture<GrupodeaccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupodeaccesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupodeaccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
