import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/interfaces/users.model';
import { Router } from '@angular/router';
import { PlanetService } from 'src/app/services/planeta.service';
import { PermisoService } from 'src/app/services/permiso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    listaPlanetas:object [];



  constructor(private router : Router, 
    private planetaservicio: PlanetService,
    private permisoServicio : PermisoService) { 
    
  }

  ngOnInit() {
    this.listaPlanetas = this.planetaservicio.getList();
  }

  mostrarDetalles(planeta){
    this.router.navigate(['/detalleplaneta', planeta.id])
  }


  login(){
    this.permisoServicio.permisotrue();
  }

}
