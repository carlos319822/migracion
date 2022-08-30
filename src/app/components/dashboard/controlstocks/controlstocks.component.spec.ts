import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlstocksComponent } from './controlstocks.component';

describe('ControlstocksComponent', () => {
  let component: ControlstocksComponent;
  let fixture: ComponentFixture<ControlstocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlstocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
