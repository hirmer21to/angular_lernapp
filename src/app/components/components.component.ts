import { Component, OnInit } from '@angular/core';
import { ModiService } from '../shared/modi.service';
import { Modus } from '../shared/modus';

import * as Prism from '../../prism.js';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styles: []
})

export class ComponentsComponent implements OnInit {
  public theorySmall: Boolean;
  public theoryLarge: Boolean;
  public praxis: Boolean;
  public modus: Modus;

  public today: number = Date.now();

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
