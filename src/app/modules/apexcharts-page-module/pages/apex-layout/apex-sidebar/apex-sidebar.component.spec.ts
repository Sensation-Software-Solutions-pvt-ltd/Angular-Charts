import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexSidebarComponent } from './apex-sidebar.component';

describe('ApexSidebarComponent', () => {
  let component: ApexSidebarComponent;
  let fixture: ComponentFixture<ApexSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
