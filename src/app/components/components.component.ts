import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styles: []
})

export class ComponentsComponent implements OnInit {
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
