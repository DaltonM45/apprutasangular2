import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import { IAnime } from 'src/app/interfaces/anime.models';

@Component({
  selector: 'app-animedetails',
  templateUrl: './animedetails.component.html',
  styleUrls: ['./animedetails.component.css']
})
export class AnimedetailsComponent implements OnInit {

  listanime: IAnime[]
  anime: IAnime;
  id: number;
  permiso: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeServicio: AnimeService,
    private route: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {

      const largolista = this.animeServicio.getList().length;

      console.log(params);
      this.id = +params.get('id')

      if(largolista < this.id){
        this.route.navigate(['/contactos'])
      }
      if(!this.id){
        this.route.navigate(['/contactos'])
      }

      
      console.log(largolista)

      if (this.id === 1) {
        this.permiso = true;
      } else {
        this.permiso = false
      }

      this.anime = this.animeServicio.getAnime(this.id)
      console.log(this.anime);
    })

    this.listanime = this.animeServicio.getList()

    console.log(this.listanime.length)


    // const id = +this.activatedRoute.snapshot.params['id']; esto para angular 2 


    /*this.id = +this.activatedRoute.snapshot.paramMap.get('id'); // para angular 4 en adelante
    this.anime = this.animeServicio.getAnime(this.id)*/

  }

  goNext() {

    if (this.id < 5) {
      this.id = this.id + 1;
    } else {
      this.id = 1;
    }
    console.log(this.id);
    this.route.navigate(['/anime/' + this.id])
  }

  goBack() {
    if (this.id <= 1) {
      this.id = this.listanime.length
    } else {
      this.id = this.id - 1;
    }

    console.log(this.id);
    this.route.navigate(['/anime/' + this.id])
  }

}
