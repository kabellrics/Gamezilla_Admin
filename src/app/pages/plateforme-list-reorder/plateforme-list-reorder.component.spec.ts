import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateformeListReorderComponent } from './plateforme-list-reorder.component';

describe('PlateformeListReorderComponent', () => {
  let component: PlateformeListReorderComponent;
  let fixture: ComponentFixture<PlateformeListReorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlateformeListReorderComponent]
    });
    fixture = TestBed.createComponent(PlateformeListReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
