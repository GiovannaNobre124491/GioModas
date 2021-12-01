import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-beleza',
  templateUrl: './prod-beleza.component.html',
  styleUrls: ['./prod-beleza.component.css']
})
export class ProdBelezaComponent implements OnInit {
  itens:any = [
    {
      img:'assets/beleza/Balsamo labial.png',
      produto: 'Balsamo labial'
    },
    {
      img:'assets/beleza/Bolsa de cosméticos.png',
      produto: 'Bolsa de cosméticos'
    },
    {
      img:'assets/beleza/Conjunto de pincéis de maquiagem.png',
      produto: 'Conjunto de pincéis de maquiagem'
    },
    {
      img:'assets/beleza/Curvador de cílios.png',
      produto: 'Curvador de cílios'
    },
    {
      img:'assets/beleza/Esponja aplicador de maquiagem cabeça chata.png',
      produto: 'Esponja aplicador de maquiagem cabeça chata'
    },
    {
      img:'assets/beleza/kit de esponjas coloridas.png',
      produto: 'kit de esponjas coloridas'
    },
    {
      img:'assets/beleza/Paleta de maquiagem.png',
      produto: 'Paleta de maquiagem'
    },
    {
      img:'assets/beleza/kit de mini garrafas para viagem.png',
      produto: 'kit de mini garrafas para viagem'
    },
    {
      img:'assets/beleza/Massageador facial.png',
      produto: 'Massageador facial'
    },
    {
      img:'assets/beleza/pinças decoradas.png',
      produto: 'Sobretudo couro elegante'
    },    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
