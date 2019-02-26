import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  title = 'Master-Project';

  public routerLinks = ["/home", "/environment", "/first-app", "/typescript", "/project-overview",
    "/application", "/components", "/components-formmodules-directives", "/reusable-components",
    "/services", "/routing", "/http", "/finish-app"];
  public routerLink: string;

  constructor(private router: Router, public location: Location) { }

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
