import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartLayoutComponent } from './high-chart-layout.component';

describe('HighChartLayoutComponent', () => {
  let component: HighChartLayoutComponent;
  let fixture: ComponentFixture<HighChartLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighChartLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
