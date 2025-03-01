import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormReactiveComponent } from './user-form-reactive.component';

describe('UserFormReactiveComponent', () => {
  let component: UserFormReactiveComponent;
  let fixture: ComponentFixture<UserFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
