import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styles: []
})
export class RoutingComponent implements OnInit {
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;

  ngOnInit() {
  }

}
