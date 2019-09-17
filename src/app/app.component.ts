import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import * as Prism from '../prism.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Learn Angular!';
  hideBackButton: Boolean = false;
  hideNextButton: Boolean = false;

  public routerLinks = ["/home", "/environment", "/first-app", "/typescript", "/project-overview",
    "/application", "/components", "/components-formmodules-directives", "/reusable-components",
    "/services", "/routing", "/http", "/finish-app"];

  public routerLink: string;

  constructor(private router: Router, public location: Location) { 
  }

  ngOnInit() {
    Prism.manual = true;
  }

  onActivate(){
    window.scroll(0,0);
  }

  getHideNextButton(): Boolean {
    this.routerLink = this.router.url;
    if (this.routerLink === this.routerLinks[0] || this.routerLink === this.routerLinks[this.routerLinks.length - 1]) {
      this.hideNextButton = true;
    } else
      this.hideNextButton = false;
    return this.hideNextButton;
  }

  getHideBackButton(): Boolean {
    this.routerLink = this.router.url;
    if (this.routerLink === this.routerLinks[0]) {
      this.hideBackButton = true;
    } else
      this.hideBackButton = false;
    return this.hideBackButton;
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
