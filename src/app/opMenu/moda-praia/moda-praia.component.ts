import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moda-praia',
  templateUrl: './moda-praia.component.html',
  styleUrls: ['./moda-praia.component.css']
})
export class ModaPraiaComponent implements OnInit {
  itens:any = [
    {
      img:'assets/praia/Biquine listrado com shorts saida de praia.png',
      produto: 'Biquine listrado com shorts saida de praia'
    },
    {
      img:'assets/praia/Conjunto Biquine dourado alça babada.png',
      produto: 'Conjunto Biquine dourado alça babada'
    },
    {
      img:'assets/praia/Conjunto Biquine rosa alça babada.png',
      produto: 'Conjunto Biquine rosa alça babada'
    },
    {
      img:'assets/praia/Conjunto Biquine estampado.png',
      produto: 'Conjunto Biquine estampado'
    },
    {
      img:'assets/praia/Conjunto Biquine triangular azul.png',
      produto: 'Conjunto Biquine triangular azul'
    },
    {
      img:'assets/praia/Conjunto Biquine triangular vermelho.png',
      produto: 'Conjunto Biquine triangular vermelho'
    },
    {
      img:'assets/praia/Maiô costa aberta amarelo.png',
      produto: 'Maiô costa aberta amarelo'
    },
    {
      img:'assets/praia/Maiô simples azul.png',
      produto: 'Maiô simples azul'
    },
    {
      img:'assets/praia/Maiô simples preto.png',
      produto: 'Maiô simples preto'
    },
    {
      img:'assets/praia/Maiô simples vermelho.png',
      produto: 'Maiô simples vermelho'
    },
    {
      img:'assets/praia/Maiô estampado tropical.png',
      produto: 'Maiô estampado tropical'
    },    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
