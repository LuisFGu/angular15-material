import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDitailsComponent } from './user-ditails.component';

describe('UserDitailsComponent', () => {
  let component: UserDitailsComponent;
  let fixture: ComponentFixture<UserDitailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDitailsComponent]
    });
    fixture = TestBed.createComponent(UserDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
