import { Component, OnInit } from '@angular/core';
import { AlimentsService } from '../aliments.service';
import { FormBuilder } from "@angular/forms";
import { AlimentPortionService } from '../aliment-portion.service';

@Component({
  selector: 'app-calulator',
  templateUrl: './calulator.component.html',
  styleUrls: ['./calulator.component.css']
})
export class CalulatorComponent implements OnInit {


  calculatorAlimentList = this.alimentService.aliments;
  portionAlimentList=this.portionService.tableau;

  formula = this.formbuilder.group({

    aliment: "",
    portion: ""

  });


  tableau: any = [];
  propCal: number;
  chargCal : number;
  chargCalTot : number = 0;
  

  constructor(private alimentService: AlimentsService,private portionService: AlimentPortionService,
    private formbuilder: FormBuilder) { }



  fonctionCalcul(alimentPortion) {
   return this.portionService.fonctionCalcul(alimentPortion);
      }

  fonctiondisplay()
  {
    
  }

  calculatorSupp(indexId)
  {   this.tableau.splice(indexId,1); }


  ngOnInit() {
  }

}
