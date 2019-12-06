import { Injectable } from '@angular/core';


@Injectable({
    providedIn : 'root'
})
export class UserService { 

    listUser = [
        {
            'id': 1,
            'nombre': 'dalton'
        },
        {
            'id': 2,
            'nombre': 'diego'
        }
    ]

    getlist(){
        return this.listUser
    }

    guardaruser(id:number, nombre:string){
        this.listUser.push({id, nombre})
        console.log('guardado correctamente.')
    }



}