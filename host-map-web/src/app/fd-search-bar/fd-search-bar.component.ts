import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-search-bar',
  templateUrl: './fd-search-bar.component.html',

  styleUrls: ['./fd-search-bar.component.css']
})
export class FdSearchBarComponent implements OnInit {

  ngOnInit() {
  }

  dominio: String;

  constructor() { }

  pesquisar(): void{
    alert(this.dominio)
  }

}
