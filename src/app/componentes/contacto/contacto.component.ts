import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { IAnime } from 'src/app/interfaces/anime.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  listAnime : IAnime[];
  selectedAnime: number;

  constructor(private animeServicio : AnimeService, private route : Router, private activeRoute : ActivatedRoute) { }

  ngOnInit() {  
    this.listAnime = this.animeServicio.getList();
    this.selectedAnime = +this.activeRoute.snapshot.paramMap.get('id');
  }


  goAnime(anime){
    this.route.navigate(['/anime/', anime.id])
  }

}
