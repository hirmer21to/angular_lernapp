import { Component, OnInit, Output } from '@angular/core';
import { ModiService } from '../shared/modi.service';
import { Modus } from '../shared/modus';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {  
  
  modus: Modus;
  modi: Modus[];

  constructor(private service: ModiService) { }

  ngOnInit() {
    this.getModi();
  }

  getModi(): void{
    this.service.getModi()
    .subscribe(modi => this.modi = modi);
  }

  theorist(): void {
    this.service.setModus(this.modi[0])
    .subscribe(modus => this.modus = modus);
  }

  practitioner(): void {
    this.service.setModus(this.modi[1])
    .subscribe(modus => this.modus = modus);
  }

  both(): void {
    this.service.setModus(this.modi[2])
    .subscribe(modus => this.modus = modus);
  }
}
