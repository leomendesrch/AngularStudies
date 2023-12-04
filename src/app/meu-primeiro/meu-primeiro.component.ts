import { Component } from "@angular/core";

@Component({
  selector: 'meu-primeiro-component',
  template: '<h1>{{text}}</h1>'
})

export class MeuPrimeiroComponent{
  text = "Fala Gajos beleza?"
}