import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLineChartsComponent } from './high-line-charts.component';

describe('HighLineChartsComponent', () => {
  let component: HighLineChartsComponent;
  let fixture: ComponentFixture<HighLineChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighLineChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighLineChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
