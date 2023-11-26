import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleassetsComponent } from './consoleassets.component';

describe('ConsoleassetsComponent', () => {
  let component: ConsoleassetsComponent;
  let fixture: ComponentFixture<ConsoleassetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleassetsComponent]
    });
    fixture = TestBed.createComponent(ConsoleassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
