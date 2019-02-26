import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {  
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  theorist(): void {
    this.theoryLarge = true;
    this.theorySmall = true;
    this.praxis = false;
  };
  practitioner(): void {
    this.theoryLarge = false;
    this.theorySmall = false;
    this.praxis = true;
  };
  both(): void {
    this.theoryLarge = false;
    this.theorySmall = true;
    this.praxis = true;
  };

}
