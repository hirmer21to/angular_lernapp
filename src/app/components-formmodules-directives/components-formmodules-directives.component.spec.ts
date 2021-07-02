import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComponentsFormmodulesDirectivesComponent } from './components-formmodules-directives.component';

describe('ComponentsFormmodulesDirectivesComponent', () => {
  let component: ComponentsFormmodulesDirectivesComponent;
  let fixture: ComponentFixture<ComponentsFormmodulesDirectivesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsFormmodulesDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsFormmodulesDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
