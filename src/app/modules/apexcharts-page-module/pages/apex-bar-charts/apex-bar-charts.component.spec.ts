import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexBarChartsComponent } from './apex-bar-charts.component';

describe('ApexBarChartsComponent', () => {
  let component: ApexBarChartsComponent;
  let fixture: ComponentFixture<ApexBarChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexBarChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexBarChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
