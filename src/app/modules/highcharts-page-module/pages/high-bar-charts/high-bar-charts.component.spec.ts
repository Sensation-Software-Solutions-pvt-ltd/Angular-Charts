import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighBarChartsComponent } from './high-bar-charts.component';

describe('HighBarChartsComponent', () => {
  let component: HighBarChartsComponent;
  let fixture: ComponentFixture<HighBarChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighBarChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighBarChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
