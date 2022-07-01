import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexHeaderComponent } from './apex-header.component';

describe('ApexHeaderComponent', () => {
  let component: ApexHeaderComponent;
  let fixture: ComponentFixture<ApexHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
