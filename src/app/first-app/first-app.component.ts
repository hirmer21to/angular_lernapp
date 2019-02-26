import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styles: []
})
export class FirstAppComponent implements OnInit {
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
