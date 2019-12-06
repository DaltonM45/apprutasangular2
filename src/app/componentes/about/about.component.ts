import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { CanComponentDeactive } from 'src/app/guards/can-deactive-user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, CanComponentDeactive {

 // @ViewChild('userform') public userform : NgForm;

  id:number;
  nombre:string;

  
  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  confirm(){
    return confirm('estas seguro de salir de esta pagina ?')
  }


  guardar(){

    const objeto = {
      id: this.id,
      nombre: this.nombre
    }
    console.log(objeto)

    this.userservice.guardaruser(this.id, this.nombre)
  }


}
