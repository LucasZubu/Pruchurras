import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  tamanho : number = 6;

  imgsDados = [
    'assets/dice-red.png',
    'assets/dice.gif'
  ]
  imagemDado = this.imgsDados[0];
  valorAtual : number = 0;
  constructor() {}

  jogarDado(){
    this.valorAtual = 0;
    this.imagemDado = this.imgsDados[1];
    setTimeout(() => {
      this.valorAtual = Math.floor(Math.random() * this.tamanho ) + 1;
    }, 1000);

  }

}
