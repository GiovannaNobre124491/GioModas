import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-macacao',
  templateUrl: './macacao.component.html',
  styleUrls: ['./macacao.component.css']
})
export class MacacaoComponent implements OnInit {
  itens:any = [
    {
      img:'assets/macacao/Macacão jardineira amarelo.png',
      produto: 'Macacão jardineira amarelo'
    },
    {
      img:'assets/macacao/Macacão malhado de botões.png',
      produto: 'Macacão malhado de botões'
    },
    {
      img:'assets/macacao/Macacão nó simples caqui.png',
      produto: 'Macacão nó simples caqui'
    },
    {
      img:'assets/macacao/Macacão nó simples verde.png',
      produto: 'Macacão nó simples verde'
    },
    {
      img:'assets/macacao/Macacão nó simples rosa.png',
      produto: 'Macacão nó simples rosa'
    },
    {
      img:'assets/macacao/Macacão nó simples preto.png',
      produto: 'Macacão nó simples preto'
    },
    {
      img:'assets/macacao/Macacão nó simples leopardo.png',
      produto: 'Macacão nó simples leopardo'
    },
    {
      img:'assets/macacao/Macacão nó simples marinheiro listrado.png',
      produto: 'Macacão nó simples marinheiro listrado'
    },
    {
      img:'assets/macacao/Macacão xadres preto e branco.png',
      produto: 'Macacão xadres preto e branco'
    },
    {
      img:'assets/macacao/Macacão xadres vermelho.png',
      produto: 'Macacão xadres vermelho'
    },    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
