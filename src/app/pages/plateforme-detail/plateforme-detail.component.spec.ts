import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateformeDetailComponent } from './plateforme-detail.component';

describe('PlateformeDetailComponent', () => {
  let component: PlateformeDetailComponent;
  let fixture: ComponentFixture<PlateformeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlateformeDetailComponent]
    });
    fixture = TestBed.createComponent(PlateformeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
