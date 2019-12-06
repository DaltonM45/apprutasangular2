import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AboutComponent } from '../componentes/about/about.component';
import { Injectable } from '@angular/core';


export interface CanComponentDeactive {
    confirm(): boolean;
    
}


@Injectable({
    providedIn : 'root'
})
export class CreateUserCanDeactive implements CanDeactivate<CanComponentDeactive> {

    canDeactivate(component: CanComponentDeactive,
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        // if(component.userform.dirty){
        //     return confirm("estas seguro de salir?")
        // }
        
        return component.confirm();
       
    }
    
}