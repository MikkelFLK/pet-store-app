import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersAddComponent } from './owners-add.component';

describe('OwnersAddComponent', () => {
  let component: OwnersAddComponent;
  let fixture: ComponentFixture<OwnersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
