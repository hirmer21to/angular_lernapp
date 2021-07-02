import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReusableComponentsComponent } from './reusable-components.component';

describe('ReusableComponentsComponent', () => {
  let component: ReusableComponentsComponent;
  let fixture: ComponentFixture<ReusableComponentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
