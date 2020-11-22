import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../../services/planetas.service'

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  planetas: any = [];

  constructor(planetaServ: PlanetasService) { 
    //this.planetas =planetaServ.getTodos();

    planetaServ.getTodos()
    .subscribe(planetas => this.planetas = planetas ['results']);
  }

  ngOnInit(): void {
  }

}
