import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexLineChartsComponent } from './apex-line-charts.component';

describe('ApexLineChartsComponent', () => {
  let component: ApexLineChartsComponent;
  let fixture: ComponentFixture<ApexLineChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexLineChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexLineChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
