import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styles: []
})
export class TypescriptComponent implements OnInit {
  public theorySmall: Boolean = true;
  public theoryLarge: Boolean = true;
  public praxis: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
