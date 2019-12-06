import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//RUTAS
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AboutComponent } from './componentes/about/about.component';
import { Error404Component } from './componentes/error404/error404.component';
import { UsersComponent } from './componentes/home/users/users.component';
import { PlanetaComponent } from './componentes/home/planeta/planeta.component';
import { AnimedetailsComponent } from './componentes/home/animedetails/animedetails.component';
import { CreateUserCanDeactive } from './guards/can-deactive-user';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { GaleriaDetalleComponent } from './componentes/galeria/galeria-detalle/galeria-detalle.component';
import { AuthGuard } from './guards/authguard'; // guards


//definiendo rutas
const rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:id/:name/:age', component: UsersComponent },
  { path: 'detalleplaneta/:id', component: PlanetaComponent },
  { path: 'contactos', component: ContactoComponent },
  { path: 'anime/:id', component: AnimedetailsComponent },
  { path: 'about', component: AboutComponent, canDeactivate: [CreateUserCanDeactive] },

  {
    path: 'galeria',
    component: GaleriaComponent,
   // canActivate: [AuthGuard],
   canActivateChild : [AuthGuard],
    children: [
      { path: ':id', component: GaleriaDetalleComponent },
    ]
  },

  { path: '**', component: Error404Component }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactoComponent,
    AboutComponent,
    Error404Component,
    UsersComponent,
    PlanetaComponent,
    AnimedetailsComponent,
    GaleriaComponent,
    GaleriaDetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [CreateUserCanDeactive],
  bootstrap: [AppComponent]
})
export class AppModule { }
