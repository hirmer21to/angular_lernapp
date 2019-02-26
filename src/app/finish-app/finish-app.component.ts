import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-finish-app',
  templateUrl: './finish-app.component.html',
  styles: []
})
export class FinishAppComponent implements OnInit {
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
