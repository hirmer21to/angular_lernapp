import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAndComponentsComponent } from './app-and-components.component';

describe('AppAndComponentsComponent', () => {
  let component: AppAndComponentsComponent;
  let fixture: ComponentFixture<AppAndComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAndComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAndComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
