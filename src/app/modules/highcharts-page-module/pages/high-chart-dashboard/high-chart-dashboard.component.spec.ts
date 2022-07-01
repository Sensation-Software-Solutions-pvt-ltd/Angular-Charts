import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartDashboardComponent } from './high-chart-dashboard.component';

describe('HighChartDashboardComponent', () => {
  let component: HighChartDashboardComponent;
  let fixture: ComponentFixture<HighChartDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighChartDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
