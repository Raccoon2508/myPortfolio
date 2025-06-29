import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesLaboratoryComponent } from '@/pages/styles-laboratory/styles-laboratory.component';

describe('StylesLaboratoryComponent', () => {
  let component: StylesLaboratoryComponent;
  let fixture: ComponentFixture<StylesLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StylesLaboratoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylesLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
