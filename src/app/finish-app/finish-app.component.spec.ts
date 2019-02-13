import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishAppComponent } from './finish-app.component';

describe('FinishAppComponent', () => {
  let component: FinishAppComponent;
  let fixture: ComponentFixture<FinishAppComponent>;

  beforeEach(async(() => {
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
