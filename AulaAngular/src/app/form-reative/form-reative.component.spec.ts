import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReativeComponent } from './form-reative.component';

describe('FormReativeComponent', () => {
  let component: FormReativeComponent;
  let fixture: ComponentFixture<FormReativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
