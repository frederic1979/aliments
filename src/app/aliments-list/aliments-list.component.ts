import { Component, OnInit } from '@angular/core';
import{AlimentsService} from '../aliments.service';
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";



@Component({
  selector: 'app-aliments-list',
  templateUrl: './aliments-list.component.html',
  styleUrls: ['./aliments-list.component.css']
})
export class AlimentsListComponent implements OnInit {
  alimentList = this.alimentService.aliments;


  formData = this.formbuilder.group({
    
    name : "",
    ig : "",
    carbs : "",

  });

  constructor(
    private alimentService:AlimentsService,
    private formbuilder : FormBuilder) 
    {
  }

  clear(){
     
    
    this.formData.patchValue({
      name : "",
    ig : "",
    carbs : "",
    })
  }

  onSubmit(aliment) {

    if (aliment.name)
    {console.log(this.formData.value.name);
    this.alimentList.push(aliment);
    console.log("ajout ok");
    this.clear();}
  }


  sortFonction(aliment)
  { 
    this.alimentList.sort();
    console.log("dans sortFonction !")
  }



 fonctionSupp(indexId)
 {   this.alimentList.splice(indexId,1); }

  ngOnInit() {
  }

}
