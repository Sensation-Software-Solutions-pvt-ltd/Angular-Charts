import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighColumnChartsComponent } from './high-column-charts.component';

describe('HighColumnChartsComponent', () => {
  let component: HighColumnChartsComponent;
  let fixture: ComponentFixture<HighColumnChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighColumnChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighColumnChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
