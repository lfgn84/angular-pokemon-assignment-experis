import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToCatalogueButtonComponent } from './to-catalogue-button.component';

describe('ToCatalogueButtonComponent', () => {
  let component: ToCatalogueButtonComponent;
  let fixture: ComponentFixture<ToCatalogueButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToCatalogueButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToCatalogueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
