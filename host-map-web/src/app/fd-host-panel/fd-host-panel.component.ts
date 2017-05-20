import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fd-fd-host-panel',
  templateUrl: './fd-host-panel.component.html',
  styleUrls: ['./fd-host-panel.component.css']
})
export class FdHostPanelComponent implements OnInit {

  @Input()
  localizacao: any = new Object();

  constructor() { }

  ngOnInit() {
  }

}
