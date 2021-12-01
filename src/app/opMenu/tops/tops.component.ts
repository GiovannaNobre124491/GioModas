import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit {
  itens:any = [
    {
      img:'assets/top/Top Plissado simples azul bebê.png',
      produto: 'Top Plissado simples azul bebê'
    },
    {
      img:'assets/top/Top simples ocasional camiseta liso preto.png',
      produto: 'Top simples ocasional camiseta liso preto'
    },
    {
      img:'assets/top/Top regata geométrico ocasional preto.png',
      produto: 'Top regata geométrico ocasional preto'
    },
    {
      img:'assets/top/Top regata geométrico ocasional azul.png',
      produto: 'Top regata geométrico ocasional azul'
    },
    {
      img:'assets/top/Top regata geométrico ocasional rosa claro.png',
      produto: 'Top regata geométrico ocasional rosa claro'
    },
    {
      img:'assets/top/Top regata geométrico ocasional rosa.png',
      produto: 'Top regata geométrico ocasional rosa'
    },
    {
      img:'assets/top/Top simples ocasional regata liso branco.png',
      produto: 'Top simples ocasional regata liso branco'
    },
    {
      img:'assets/top/Top simples ocasional regata liso marrom claro.png',
      produto: 'Top simples ocasional regata liso marrom claro'
    },
    {
      img:'assets/top/Top simples ocasional regata liso marrom escuro.png',
      produto: 'Top simples ocasional regata liso marrom escuro'
    },
    {
      img:'assets/top/Top simples ocasional regata liso preto.png',
      produto: 'Top simples ocasional regata liso preto'
    },
    {
      img:'assets/top/Top simples ocasional regata liso verde.png',
      produto: 'Top simples ocasional regata liso verde'
    },    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
