import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styles: []
})
export class ApplicationComponent implements OnInit {
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
