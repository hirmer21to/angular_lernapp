import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-components',
  templateUrl: './reusable-components.component.html',
  styles: []
})
export class ReusableComponentsComponent implements OnInit {
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
