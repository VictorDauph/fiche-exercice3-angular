import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormTemplateComponent } from './user-form-template.component';

describe('UserFormTemplateComponent', () => {
  let component: UserFormTemplateComponent;
  let fixture: ComponentFixture<UserFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
