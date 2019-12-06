import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetService } from 'src/app/services/planeta.service';

export interface IPlanet {

  id: number, nombre: string, tipo: string, edad: number, gravedad: number, temperatura: number, imagen: string
}

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})

export class PlanetaComponent implements OnInit {

  planeta: IPlanet;
  
  constructor(private activatedRoute: ActivatedRoute,
    private planetaservicio: PlanetService,
    private route: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params)
      // console.log(params['id']);
      this.planeta = this.planetaservicio.getPlaneta(+params['id']);

      if (!this.planeta) {
        console.log("Deberia de navegar a una pagina de 404");
      }
      console.log(this.planeta)
    });


  }

  irAtras() {
    this.route.navigate([''])
  }


}
