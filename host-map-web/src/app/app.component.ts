import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  localizacao:any = new Object();


  exibirLocalizacao(localizacao): void {
    this.localizacao=localizacao;
    console.log(localizacao);
  }

}
