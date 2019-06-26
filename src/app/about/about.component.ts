import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  about:Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  aboutFunc(): Boolean{
    this.about = true;
    return this.about;
  }

  hideAbout(): Boolean{
    this.about = false;
    return this.about;
  }
}
