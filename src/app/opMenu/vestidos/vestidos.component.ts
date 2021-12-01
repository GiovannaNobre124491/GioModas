import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vestidos',
  templateUrl: './vestidos.component.html',
  styleUrls: ['./vestidos.component.css']
})
export class VestidosComponent implements OnInit {
  itens:any = [
    {
      img:'assets/vestido/Vestido casual costas nuas floral.png',
      produto: 'Vestido casual costas nuas floral'
    },
    {
      img:'assets/vestido/Vestido casual social geométrico.png',
      produto: 'Vestido casual social geométrico'
    },
    {
      img:'assets/vestido/Vestido elegante Leopardo negro.png',
      produto: 'Vestido elegante Leopardo negro'
    },
    {
      img:'assets/vestido/Vestido festa gliter costas nuas.png',
      produto: 'Vestido festa gliter costas nuas'
    },
    {
      img:'assets/vestido/Vestido Floral azul.png',
      produto: 'Vestido Floral azul'
    },
    {
      img:'assets/vestido/Vestido Floral rodado.png',
      produto: 'Vestido Floral rodado'
    },
    {
      img:'assets/vestido/Vestido longo floral Boho azul.png',
      produto: 'Vestido longo floral Boho azul'
    },
    {
      img:'assets/vestido/Vestido longo floral Boho rosa.png',
      produto: 'Vestido longo floral Boho rosa'
    },
    {
      img:'assets/vestido/Vestido longo Leopardo.png',
      produto: 'Vestido longo Leopardo'
    },
    {
      img:'assets/vestido/Vestido tropical Tie Back.png',
      produto: 'Vestido tropical Tie Back'
    },    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
