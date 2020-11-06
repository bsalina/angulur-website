import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextcompComponent } from './nextcomp.component';

describe('NextcompComponent', () => {
  let component: NextcompComponent;
  let fixture: ComponentFixture<NextcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
