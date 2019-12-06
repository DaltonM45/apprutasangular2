import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/interfaces/users.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: {id:number, name:string , age:number }

 /* usuarios:IUsers[] = [
    {
      'id': 1,
      'nombre': 'dalton',
      'edad': 20,
    },
    {
      'id': 2,
      'nombre': 'elisa',
      'edad': 21
    },
    {
      'id': 3,
      'nombre': 'leo',
      'edad': 18
    }
  ]*/

  constructor( private route:ActivatedRoute) { }

  ngOnInit() {
    this.users = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      age: this.route.snapshot.params['age'],
    }
  }

}
