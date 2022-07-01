import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartSidebarComponent } from './high-chart-sidebar.component';

describe('HighChartSidebarComponent', () => {
  let component: HighChartSidebarComponent;
  let fixture: ComponentFixture<HighChartSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighChartSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
