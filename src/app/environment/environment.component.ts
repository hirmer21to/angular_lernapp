import { Component, OnInit } from '@angular/core';
import { Modus } from '../shared/modus';
import { ModiService } from '../shared/modi.service';

import * as Prism from '../../prism.js';
import * as jQuery from 'jquery';
import * as SemanticUI from '../../semantic.js';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styles: []
})
export class EnvironmentComponent implements OnInit {
  public theorySmall: Boolean;
  public theoryLarge: Boolean;
  public praxis: Boolean;
  public modus: Modus;

  constructor(private service: ModiService) {
  }

  ngOnInit() {
    this.getModus();
    this.theorySmall = this.modus.theorySmall;
    this.theoryLarge = this.modus.theoryLarge;
    this.praxis = this.modus.praxis;
  }

  ngAfterViewInit() {
    Prism.highlightAll();
    console.log(SemanticUI);
    console.log(jQuery);
    SemanticUI.initialize(jQuery, window, document);
    SemanticUI.initialize2(jQuery, window, document);
    SemanticUI.initialize3(jQuery, window, document);
    jQuery(document).ready(function () {
      console.log(jQuery('.ui.accordion').accordion());
    })
;
  }

  getModus(): void{
    this.service.getModus()
    .subscribe(modus => this.modus = modus);
  }

}
