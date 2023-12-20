import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngProject';

  valorAtual: string = '';
  valorSalvo: string = "";

  isMouseOver: boolean = false;

  botaoClicado(){
    alert("Botão Clicado!");
  }
  
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (evento.target as HTMLInputElement).value
  }

  SalvarValor(elemento: HTMLInputElement | null){
    this.valorSalvo = (elemento!).value
  }

  onMouseOverOut(elemento: HTMLSpanElement){
    this.isMouseOver = !this.isMouseOver
    console.log(elemento)
  }


}
