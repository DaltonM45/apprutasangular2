import { Injectable } from '@angular/core';



@Injectable({
    providedIn : 'root'
})
export class PlanetService {

    listaPlanetas = [
        {
          id: 1,
          nombre: 'tierra',
          tipo : 'rocoso',
          edad: 1000000,
          gravedad: 9.8,
          temperatura: 33,
          imagen: 'https://descubrelo.org/wp-content/uploads/2019/02/planeta-Tierra.jpg'
        },
        {
          id: 2,
          nombre: 'jupiter',
          tipo : 'gaseoso',
          edad: 1200000,
          gravedad: 25.6,
          temperatura: 315,
          imagen: 'https://www.eldiario24.com/d24ar/fotos/uploads/editorial/2014/11/13/imagenes/4439_jupiter.jpg'
        },
        {
          id: 3,
          nombre: 'pluton',
          tipo : 'enano',
          edad: 1200000,
          gravedad: 15.3,
          temperatura: - 186,
          imagen: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/17A8E/production/_103401969_pluton-nasa.png'
        },
        {
            id: 4,
            nombre: 'marte',
            tipo : 'rocoso',
            edad: 1200000,
            gravedad: 3.7,
            temperatura: - 50,
            imagen: 'https://www.meteorologiaenred.com/wp-content/uploads/2018/08/planeta-Marte.jpg'
          }
      ]
      

      getList(){
          return this.listaPlanetas
      }

      getPlaneta(id:number){
        return this.listaPlanetas.find((data) => {
            return data.id === id;
        });
      }

}