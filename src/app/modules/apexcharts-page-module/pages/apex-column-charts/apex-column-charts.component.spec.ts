import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexColumnChartsComponent } from './apex-column-charts.component';

describe('ApexColumnChartsComponent', () => {
  let component: ApexColumnChartsComponent;
  let fixture: ComponentFixture<ApexColumnChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexColumnChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexColumnChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
