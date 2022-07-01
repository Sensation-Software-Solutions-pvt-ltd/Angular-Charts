import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexPieChartsComponent } from './apex-pie-charts.component';

describe('ApexPieChartsComponent', () => {
  let component: ApexPieChartsComponent;
  let fixture: ComponentFixture<ApexPieChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexPieChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexPieChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
