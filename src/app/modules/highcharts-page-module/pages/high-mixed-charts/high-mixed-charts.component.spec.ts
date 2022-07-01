import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighMixedChartsComponent } from './high-mixed-charts.component';

describe('HighMixedChartsComponent', () => {
  let component: HighMixedChartsComponent;
  let fixture: ComponentFixture<HighMixedChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighMixedChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighMixedChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
