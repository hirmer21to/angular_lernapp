import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-components',
  templateUrl: './reusable-components.component.html',
  styles: []
})
export class ReusableComponentsComponent implements OnInit {

  constructor() { }
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;
  ngOnInit() {
  }

}
