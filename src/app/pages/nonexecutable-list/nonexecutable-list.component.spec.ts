import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonexecutableListComponent } from './nonexecutable-list.component';

describe('NonexecutableListComponent', () => {
  let component: NonexecutableListComponent;
  let fixture: ComponentFixture<NonexecutableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonexecutableListComponent]
    });
    fixture = TestBed.createComponent(NonexecutableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
