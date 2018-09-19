import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatAvailableComponent } from './seat-available.component';

describe('SeatAvailableComponent', () => {
  let component: SeatAvailableComponent;
  let fixture: ComponentFixture<SeatAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
