import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAppComponent } from './first-app.component';

describe('FirstAppComponent', () => {
  let component: FirstAppComponent;
  let fixture: ComponentFixture<FirstAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
