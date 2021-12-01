import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lingerie',
  templateUrl: './lingerie.component.html',
  styleUrls: ['./lingerie.component.css']
})
export class LingerieComponent implements OnInit {
  itens:any = [
    {
      img:'assets/lingerie/Bralette de renda floral preto.png',
      produto: 'Bralette de renda floral preto'
    },
    {
      img:'assets/lingerie/Calcinhas renda floral com laço.png',
      produto: 'Calcinhas renda floral com laço'
    },
    {
      img:'assets/lingerie/Calcinhas renda floral kit com 4 .png',
      produto: 'Calcinhas renda floral kit c/ 4'
    },
    {
      img:'assets/lingerie/Calcinhas sem costura cores vivas kit com 7 .png',
      produto: 'Calcinhas sem costura cores vivas kit com 7'
    },
    {
      img:'assets/lingerie/Calcinhas sem costura estampada animais.png',
      produto: 'Calcinhas sem costura estampada animais'
    },
    {
      img:'assets/lingerie/Conjunto Romântico&Sensual verrmelho.png',
      produto: 'Conjunto Romântico&Sensual verrmelho'
    },
    {
      img:'assets/lingerie/Sutiã canelado Sexy Goddess.png',
      produto: 'Sutiã canelado Sexy Goddess'
    },
    {
      img:'assets/lingerie/Sutiã de malha com bordado floral.png',
      produto: 'Sutiã de malha com bordado floral'
    },
    {
      img:'assets/lingerie/Sutiã em forma de coração.png',
      produto: 'Sutiã em forma de coração'
    },
    {
      img:'assets/lingerie/Sutiã triangular de setim.png',
      produto: 'Sutiã triangular de setim'
    },    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
