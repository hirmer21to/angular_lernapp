import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styles: []
})
export class EnvironmentComponent implements OnInit {
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
