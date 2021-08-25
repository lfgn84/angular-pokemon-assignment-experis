import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToProfileButtonComponent } from './to-profile-button.component';

describe('ToProfileButtonComponent', () => {
  let component: ToProfileButtonComponent;
  let fixture: ComponentFixture<ToProfileButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToProfileButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToProfileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
