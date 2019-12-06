import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { PermisoService } from '../services/permiso.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    //METODO CANACTIVECHILD para proteger las hijas rutas
    canActivateChild(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

            return this.canActivate(route,state)
    }

    //CONSTRUCTOR
    constructor(private permisoService : PermisoService,
                private route : Router){}


    //CANACTIVATE 
    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean   | Observable<boolean> | Promise<boolean> {
            
         return this.permisoService.isAutenticated().then( (authenticated: boolean) => {
            if(authenticated){
                return true
            }else{
                this.route.navigate(['/'])
            }
        })
    }


}