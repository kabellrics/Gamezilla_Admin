import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonexecutableDetailComponent } from './nonexecutable-detail.component';

describe('NonexecutableDetailComponent', () => {
  let component: NonexecutableDetailComponent;
  let fixture: ComponentFixture<NonexecutableDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonexecutableDetailComponent]
    });
    fixture = TestBed.createComponent(NonexecutableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
