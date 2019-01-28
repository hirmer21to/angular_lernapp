import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styles: []
})
export class ComponentsComponent implements OnInit {

  constructor() { }
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;

  ngOnInit() {
  }

}
