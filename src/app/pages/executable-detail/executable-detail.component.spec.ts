import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutableDetailComponent } from './executable-detail.component';

describe('ExecutableDetailComponent', () => {
  let component: ExecutableDetailComponent;
  let fixture: ComponentFixture<ExecutableDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecutableDetailComponent]
    });
    fixture = TestBed.createComponent(ExecutableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
