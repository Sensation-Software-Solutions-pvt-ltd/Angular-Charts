import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartFooterComponent } from './high-chart-footer.component';

describe('HighChartFooterComponent', () => {
  let component: HighChartFooterComponent;
  let fixture: ComponentFixture<HighChartFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighChartFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
