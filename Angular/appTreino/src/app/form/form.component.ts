import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  nome: string;
  idade: number;

  enviar(){
    console.log("Enviado!");
    console.log("Nome: " + this.nome + "   Idade: "+ this.idade);
    this.limparCampos();
  }

  limparCampos(){
    this.nome = "";
    this.idade = 0;
  }

}
