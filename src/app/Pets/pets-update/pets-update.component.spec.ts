import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsUpdateComponent } from './pets-update.component';

describe('PetsUpdateComponent', () => {
  let component: PetsUpdateComponent;
  let fixture: ComponentFixture<PetsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
