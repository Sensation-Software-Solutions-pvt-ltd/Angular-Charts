import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPieChartsComponent } from './high-pie-charts.component';

describe('HighPieChartsComponent', () => {
  let component: HighPieChartsComponent;
  let fixture: ComponentFixture<HighPieChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighPieChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighPieChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
