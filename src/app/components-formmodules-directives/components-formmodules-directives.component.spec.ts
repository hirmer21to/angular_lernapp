import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsFormmodulesDirectivesComponent } from './components-formmodules-directives.component';

describe('ComponentsFormmodulesDirectivesComponent', () => {
  let component: ComponentsFormmodulesDirectivesComponent;
  let fixture: ComponentFixture<ComponentsFormmodulesDirectivesComponent>;

  beforeEach(async(() => {
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
