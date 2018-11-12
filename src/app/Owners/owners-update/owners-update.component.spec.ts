import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersUpdateComponent } from './owners-update.component';

describe('OwnersUpdateComponent', () => {
  let component: OwnersUpdateComponent;
  let fixture: ComponentFixture<OwnersUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
