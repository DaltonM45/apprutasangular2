import { IAnime } from '../interfaces/anime.models';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class AnimeService {


    listaAnime: IAnime [] = [
        {
            'id': 1,
            'nombre': 'Naruto Shippuden',
            'descripcion': 'Lorem ipsum dolor sit ametspendisse in diam tincidunt, facilisis t Curabitur maximus, velit u',
            'temporadas': 2,
            'foto': 'https://i.ytimg.com/vi/SHTXpNfK2R8/maxresdefault.jpg'
        },
        {
            'id': 2,
            'nombre': 'Bleach',
            'descripcion': 'Lorem ipsum dolor sit ametspendisse in diam tincidunt, facilisis t Curabitur maximus, velit u',
            'temporadas': 1,
            'foto': 'https://images.justwatch.com/backdrop/8598604/s1440/bleach'
        },
        {
            'id': 3,
            'nombre': 'Nanatsu no taizai',
            'descripcion': 'Lorsse in diam tincidunt, facilisis turpis cursus, aliquet mi. Curabitur maximus, velit u',
            'temporadas': 2,
            'foto': 'https://larepublica.pe/resizer/1H_UikgMQxWt9C9qtJol11ezrt0=/646x380/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/PIIDM4QUWRCQFMZMW6LORAFEWY.jpg'
        },
        {
            'id': 4,
            'nombre': 'Shingeky no Kyojin',
            'descripcion': 'Lorsse in diam tincidunt, facilisis turpis cursus, aliquet mi. Curabitur maximus, velit u',
            'temporadas': 3,
            'foto': 'https://www.eldesconcierto.cl/wp-content/uploads/2019/05/Shingeki.jpg'
        },
        {
            'id': 5,
            'nombre': 'Dragon ball',
            'descripcion': 'Lorsse in diam tincidunt, facilisis turpis cursus, aliquet mi. Curabitur maximus, velit u',
            'temporadas': 3,
            'foto': 'http://static.t13.cl/images/sizes/1200x675/1536862369-dragon-ball-z-970x545.jpg'
        }
    ]


    //retorna la lista de anime
    getList(){
        return this.listaAnime
    }

    //retorna una anime en especifico
    getAnime(id: number){
        return this.listaAnime.find((data) => {
            return data.id === id;
        })
    }





}