import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexMixedChartsComponent } from './apex-mixed-charts.component';

describe('ApexMixedChartsComponent', () => {
  let component: ApexMixedChartsComponent;
  let fixture: ComponentFixture<ApexMixedChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexMixedChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexMixedChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
