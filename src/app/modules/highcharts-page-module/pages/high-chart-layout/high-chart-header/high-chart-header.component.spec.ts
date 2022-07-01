import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartHeaderComponent } from './high-chart-header.component';

describe('HighChartHeaderComponent', () => {
  let component: HighChartHeaderComponent;
  let fixture: ComponentFixture<HighChartHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighChartHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
