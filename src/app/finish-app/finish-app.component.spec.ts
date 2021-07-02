import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FinishAppComponent } from './finish-app.component';

describe('FinishAppComponent', () => {
  let component: FinishAppComponent;
  let fixture: ComponentFixture<FinishAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
