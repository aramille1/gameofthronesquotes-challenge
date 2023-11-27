import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsDetailsComponentComponent } from './persons-details-component.component';

describe('PersonsDetailsComponentComponent', () => {
  let component: PersonsDetailsComponentComponent;
  let fixture: ComponentFixture<PersonsDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
