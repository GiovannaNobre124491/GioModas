import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pijamas',
  templateUrl: './pijamas.component.html',
  styleUrls: ['./pijamas.component.css']
})
export class PijamasComponent implements OnInit {
  itens:any = [
    {
      img:'assets/pijama/Conjunto polo xadres rosa com bolso.png',
      produto: 'Conjunto polo xadres rosa com bolso'
    },
    {
      img:'assets/pijama/Conjunto polo preto botões coração.png',
      produto: 'Conjunto polo preto botões coração'
    },
    {
      img:'assets/pijama/Conjunto polo seda cactus.png',
      produto: 'Conjunto polo seda cactus'
    },
    {
      img:'assets/pijama/Conjunto conforto duas opções.png',
      produto: 'Conjunto conforto duas opções'
    },
    {
      img:'assets/pijama/Conjunto seda alça fina preto.png',
      produto: 'Conjunto seda alça fina preto'
    },
    {
      img:'assets/pijama/Bow simples animal girafa conforto.png',
      produto: 'Bow simples animal girafa conforto'
    },
    {
      img:'assets/pijama/Bow simples animal leão conforto.png',
      produto: 'Bow simples animal leão conforto'
    },
    {
      img:'assets/pijama/Conjunto animal vaca conforto.png',
      produto: 'Conjunto animal vaca conforto'
    },
    {
      img:'assets/pijama/Bow fofo galáxia .png',
      produto: 'Bow fofo galáxia'
    },
    {
      img:'assets/pijama/Bow coração fofo vinho.png',
      produto: 'Bow coração fofo vinho'
    },
    {
      img:'assets/pijama/Bow coração fofo vermelho e branco.png',
      produto: 'Bow coração fofo vermelho e branco'
    },
    {
      img:'assets/pijama/Bow coração fofo rosa e preto.png',
      produto: 'Bow coração fofo rosa e preto'
    },
    {
      img:'assets/pijama/Bow coração fofo preto e rosa.png',
      produto: 'Bow coração fofo preto e rosa'
    },
    {
      img:'assets/pijama/Bow coração fofo cinza.png',
      produto: 'Bow coração fofo cinza'
    },    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
