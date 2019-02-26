import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-components-formmodules-directives',
  templateUrl: './components-formmodules-directives.component.html',
  styles: []
})
export class ComponentsFormmodulesDirectivesComponent implements OnInit {
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
