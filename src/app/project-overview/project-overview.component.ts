import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styles: []
})
export class ProjectOverviewComponent implements OnInit {
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
