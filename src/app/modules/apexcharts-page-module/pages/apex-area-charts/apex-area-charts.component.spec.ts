import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexAreaChartsComponent } from './apex-area-charts.component';

describe('ApexAreaChartsComponent', () => {
  let component: ApexAreaChartsComponent;
  let fixture: ComponentFixture<ApexAreaChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexAreaChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexAreaChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
