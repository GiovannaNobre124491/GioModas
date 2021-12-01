import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blusas',
  templateUrl: './blusas.component.html',
  styleUrls: ['./blusas.component.css']
})
export class BlusasComponent implements OnInit {

  itens:any = [
    {
      img:'assets/blusas/Casaco couro verde.png',
      produto: 'Casaco couro verde'
    },
    {
      img:'assets/blusas/Casaco fino botões grandes.png',
      produto: 'Casaco fino botões grandes'
    },
    {
      img:'assets/blusas/Casaco fino caberto.png',
      produto: 'Casaco fino caberto'
    },
    {
      img:'assets/blusas/Casaco geomético franjado .png',
      produto: 'Casaco geomético franjado '
    },
    {
      img:'assets/blusas/Casaco lã branca.png',
      produto: 'Casaco lã branca'
    },
    {
      img:'assets/blusas/Casaco lã fofa botão duplo.png',
      produto: 'Casaco lã fofa botão duplo'
    },
    {
      img:'assets/blusas/Casaco ocasional preto liso.png',
      produto: 'Casaco ocasional preto liso'
    },
    {
      img:'assets/blusas/Casaco simples elegante preto.png',
      produto: 'Casaco simples elegante preto'
    },
    {
      img:'assets/blusas/Casaco xadres verde.png',
      produto: 'Casaco xadres verde'
    },
    {
      img:'assets/blusas/Sobretudo couro elegante.png',
      produto: 'Sobretudo couro elegante'
    },    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
