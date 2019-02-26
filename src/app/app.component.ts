import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Modus } from './shared/modus';
import { ModiService } from './shared/modi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  title = 'Master-Project';
  modus: Modus;
  modi: Modus[];

  public routerLinks = ["/home", "/environment", "/first-app", "/typescript", "/project-overview",
    "/application", "/components", "/components-formmodules-directives", "/reusable-components",
    "/services", "/routing", "/http", "/finish-app"];
  public routerLink: string;

  constructor(private router: Router, public location: Location, private service: ModiService) { }

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
    console.log(this.modus);
  }

  practitioner(): void {
    this.service.setModus(this.modi[1])
    .subscribe(modus => this.modus = modus);
    console.log(this.modus);
  }

  both(): void {
    this.service.setModus(this.modi[2])
    .subscribe(modus => this.modus = modus);
    console.log(this.modus);
  }

  getNext(): string {
    this.routerLink = this.router.url;
    let counter = -1;
    for (let r of this.routerLinks) {
      counter++;
      if (this.routerLink === r) {
        this.routerLink = this.routerLinks[counter + 1];
        break;
      }
    }
    return this.routerLink;
  }
  getLast(): string {
    this.routerLink = this.router.url;
    let counter = -1;
    for (let r of this.routerLinks) {
      counter++;
      if (this.routerLink === r) {
        this.routerLink = this.routerLinks[counter - 1];
        break;
      }
    }
    return this.routerLink;
  }

}
