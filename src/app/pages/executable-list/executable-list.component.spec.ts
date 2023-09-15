import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutableListComponent } from './executable-list.component';

describe('ExecutableListComponent', () => {
  let component: ExecutableListComponent;
  let fixture: ComponentFixture<ExecutableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutableListComponent]
    });
    fixture = TestBed.createComponent(ExecutableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
