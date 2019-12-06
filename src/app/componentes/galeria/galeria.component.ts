import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  banderas = [
    {
      'id': 1,
      'pais':'venecia',
      'imagen': 'https://www.flagsonline.it/uploads/2017-8-31/420-272/venezia-leone-san-marco.jpg'
    },
    {
      'id': 2,
      'pais':'protugal',
      'imagen': 'https://http2.mlstatic.com/bandera-de-portugal-nueva-150x90cm-D_NQ_NP_682113-MLA27389728817_052018-F.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
