import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saias',
  templateUrl: './saias.component.html',
  styleUrls: ['./saias.component.css']
})
export class SaiasComponent implements OnInit {
  itens:any = [
    {
      img:'assets/saia/Saia anel manta formal preto.png',
      produto: 'Saia anel manta formal preto'
    },
    {
      img:'assets/saia/Saia anel manta formal vermelho.png',
      produto: 'Saia anel manta formal vermelho'
    },
    {
      img:'assets/saia/Saia colado dividido simples.png',
      produto: 'Saia colado dividido simples'
    },
    {
      img:'assets/saia/Saia figura ocasional.png',
      produto: 'Saia figura ocasional'
    },
    {
      img:'assets/saia/Saia festa glamour rosa.png',
      produto: 'Saia festa glamour rosa'
    },
    {
      img:'assets/saia/Saia preta com sinto e bolsa de ataque.png',
      produto: 'Saia preta com sinto e bolsa de ataque'
    },
    {
      img:'assets/saia/Saia Laço Plissadi xadres.png',
      produto: 'Saia Laço Plissadi xadres'
    },  
    {
      img:'assets/saia/Saia Dazy simples ocasional lisa.png',
      produto: 'Saia Dazy simples ocasional lisa'
    },
    {
      img:'assets/saia/Saia simples elegante verde oliva.png',
      produto: 'Saia simples elegante verde oliva'
    },
    {
      img:'assets/saia/Saia longa preta com florsinha.png',
      produto: 'Saia longa preta com florsinha'
    },
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
