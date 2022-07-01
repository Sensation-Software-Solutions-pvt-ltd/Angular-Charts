import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexLayoutComponent } from './apex-layout.component';

describe('ApexLayoutComponent', () => {
  let component: ApexLayoutComponent;
  let fixture: ComponentFixture<ApexLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
