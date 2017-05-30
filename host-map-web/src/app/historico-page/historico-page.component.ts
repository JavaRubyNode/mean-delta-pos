import {Component, OnInit} from '@angular/core';
import {Localizacao} from "../model/Localizacao";
import {HttpClientService} from "../http-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'fd-historico-page',
  templateUrl: './historico-page.component.html',
  styleUrls: ['./historico-page.component.css']
})
export class HistoricoPageComponent implements OnInit {

  historico: Localizacao[];

  constructor(private httpClient: HttpClientService, private _route:Router) {
  }

  ngOnInit() {
    this.httpClient
      .get('http://localhost:3000/api/localizacao')
      .subscribe((docs) => {
        this.historico = docs
      });
  }
  consultarMapa(query:String){
    this._route.navigate(['/map', query]);
  }
}
