import { reject } from 'q';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn : 'root'
})
export class PermisoService {
       
   autorizacion:boolean = false;
   
   
   isAutenticated(){
       const promise = new Promise( (resolve, reject)=> {
           setTimeout(()=> {
               resolve(this.autorizacion)
           },900)
       })
       return promise;
   } 


   permisotrue(){
       this.autorizacion = true;
   }

   permisofalse(){
    this.autorizacion = false;
   }


}