import {Component, OnInit} from '@angular/core';
import {Localizacao} from "../model/Localizacao";
import {HttpClientService} from "../http-client.service";

@Component({
  selector: 'fd-historico-page',
  templateUrl: './historico-page.component.html',
  styleUrls: ['./historico-page.component.css']
})
export class HistoricoPageComponent implements OnInit {

  historico: Localizacao[];

  constructor(private HttpClient: HttpClientService) {
  }

  ngOnInit() {
    this.HttpClient.get('http://localhost:3000/api/localizacao').subscribe((docs)=>{
      this.historico=docs
    });




  }
}
