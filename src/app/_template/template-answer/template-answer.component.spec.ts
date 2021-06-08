import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAnswerComponent } from './template-answer.component';

describe('TemplateAnswerComponent', () => {
  let component: TemplateAnswerComponent;
  let fixture: ComponentFixture<TemplateAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
