import { Injectable } from '@angular/core';
import { Modus } from "./modus";
import { MODI } from "./modi";
import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ModiService {

  public currentModus: Modus = {name: "default", theorySmall: true, theoryLarge: true, praxis: true};

  constructor() { }

  getModi(): Observable<Modus[]> {
    return of (MODI);
  }

  getModus(): Observable<Modus>{
    return of (this.currentModus);
  }

  setModus(modus: Modus): Observable<Modus> {
    this.currentModus = modus;
    return of (this.currentModus);
  }
}
