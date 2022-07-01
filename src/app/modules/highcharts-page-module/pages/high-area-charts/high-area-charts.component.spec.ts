import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighAreaChartsComponent } from './high-area-charts.component';

describe('HighAreaChartsComponent', () => {
  let component: HighAreaChartsComponent;
  let fixture: ComponentFixture<HighAreaChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighAreaChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighAreaChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
