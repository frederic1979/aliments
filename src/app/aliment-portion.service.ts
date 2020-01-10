import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlimentPortionService {

  constructor() { }

  tableau: any = [];
  propCal: number;
  chargCal : number;
  chargCalTot : number = 0;

  fonctionCalcul(alimentPortion) {

    this.tableau.push({
      name: alimentPortion.aliment.name,
      ig: alimentPortion.aliment.ig,
      prop: this.propCal = (alimentPortion.aliment.carbs * alimentPortion.portion) / 100,
      charg: (this.chargCal=(this.propCal * alimentPortion.aliment.ig) / 100)
    });
    
      this.chargCalTot = this.chargCal + this.chargCalTot;
      }

}
