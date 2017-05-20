import { Component, OnInit } from '@angular/core';
import {Localizacao} from '../model/Localizacao';

@Component({
  selector: 'fd-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {

  localizacao: any = new Localizacao();

  constructor(){

  }
  exibirLocalizacao(localizacao): void {
    this.localizacao=localizacao;
    console.log(localizacao);
  }

}
