import {Component, Input, OnInit} from '@angular/core';
import {Localizacao} from '../model/Localizacao';

@Component({
  selector: 'fd-fd-host-panel',
  templateUrl: './fd-host-panel.component.html',
  styleUrls: ['./fd-host-panel.component.css']
})
export class FdHostPanelComponent implements OnInit {

  @Input()
  localizacao: any = new Localizacao();

  constructor() { }

  ngOnInit() {
  }

}
