import { Component, OnInit } from '@angular/core';
import { Modus } from '../shared/modus';
import { ModiService } from '../shared/modi.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styles: []
})
export class ProjectOverviewComponent implements OnInit {
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

  getModus(): void{
    this.service.getModus()
    .subscribe(modus => this.modus = modus);
  }

}
