import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateGroupComponent } from './template-group.component';

describe('TemplateGroupComponent', () => {
  let component: TemplateGroupComponent;
  let fixture: ComponentFixture<TemplateGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
