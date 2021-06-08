import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateQuestionComponent } from './template-question.component';

describe('TemplateQuestionComponent', () => {
  let component: TemplateQuestionComponent;
  let fixture: ComponentFixture<TemplateQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
