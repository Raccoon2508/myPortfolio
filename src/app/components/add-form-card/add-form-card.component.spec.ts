import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormCardComponent } from './add-form-card.component';

describe('AddFormCardComponent', () => {
  let component: AddFormCardComponent;
  let fixture: ComponentFixture<AddFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFormCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
