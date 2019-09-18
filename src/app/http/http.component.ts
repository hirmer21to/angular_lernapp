import { Component, OnInit, Input } from '@angular/core';
import { Modus } from '../shared/modus';
import { ModiService } from '../shared/modi.service';

import * as Prism from '../../prism.js';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styles: []
})
export class HttpComponent implements OnInit {
  public theorySmall: Boolean;
  public theoryLarge: Boolean;
  public praxis: Boolean;
  public modus: Modus;

  constructor(private service: ModiService) { }

  ngOnInit() {
    this.getModus();
    this.theorySmall = this.modus.theorySmall;
    this.theoryLarge = this.modus.theoryLarge;
    this.praxis = this.modus.praxis;
  }

  ngAfterViewInit() {
    Prism.highlightAll();
  }

  getModus(): void{
    this.service.getModus()
    .subscribe(modus => this.modus = modus);
  }

}
