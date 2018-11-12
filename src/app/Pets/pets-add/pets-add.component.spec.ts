import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsAddComponent } from './pets-add.component';

describe('PetsAddComponent', () => {
  let component: PetsAddComponent;
  let fixture: ComponentFixture<PetsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
