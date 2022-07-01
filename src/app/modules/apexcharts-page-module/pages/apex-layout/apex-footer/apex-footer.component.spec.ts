import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApexFooterComponent } from './apex-footer.component';

describe('ApexFooterComponent', () => {
  let component: ApexFooterComponent;
  let fixture: ComponentFixture<ApexFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
