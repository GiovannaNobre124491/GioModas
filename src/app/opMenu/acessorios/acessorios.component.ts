import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.css']
})
export class AcessoriosComponent implements OnInit {
  itens:any = [
    {
      img:'assets/acessorios/Boné baby girl.png',
      produto: 'Boné baby girl'
    },
    {
      img:'assets/acessorios/Chapéu de palha com laço.png',
      produto: 'Chapéu de palha com laço'
    },
    {
      img:'assets/acessorios/Cinto fivela coração.png',
      produto: 'Cinto fivela coração'
    },
    {
      img:'assets/acessorios/Cinto roxo fivela de ouro.png',
      produto: 'Cinto roxo fivela de ouro'
    },
    {
      img:'assets/acessorios/Gorro de malha sólida.png',
      produto: 'Gorro de malha sólida'
    },
    {
      img:'assets/acessorios/Gorro Rumwe.png',
      produto: 'Gorro Rumwe'
    },
    {
      img:'assets/acessorios/Óculos de sol arm marron.png',
      produto: 'Óculos de sol arm marron'
    },
    {
      img:'assets/acessorios/Óculos de sol cat eye rosa.png',
      produto: 'Óculos de sol cat eye rosa'
    },
    {
      img:'assets/acessorios/Relógio de quartzo rosa.png',
      produto: 'Relógio de quartzo rosa'
    },
    {
      img:'assets/acessorios/Relógio pulseira flores.png',
      produto: 'Relógio pulseira flores'
    },    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
