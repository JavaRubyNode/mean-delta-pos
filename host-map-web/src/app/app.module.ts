import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FdSearchBarComponent } from './fd-search-bar/fd-search-bar.component';
import {HttpClientService} from './http-client.service';
import { FdHostPanelComponent } from './fd-host-panel/fd-host-panel.component';
import { AgmCoreModule } from '@agm/core';
import {environment} from '../environments/environment';
import { MapContainerComponent } from './map-container/map-container.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import {Route, RouterModule, Routes} from '@angular/router';
import { MapPageComponent } from './map-page/map-page.component';
import { HistoricoPageComponent } from './historico-page/historico-page.component';

export const rotas : Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: 'map', component: MapPageComponent },
  { path: 'historico', component: HistoricoPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FdSearchBarComponent,
    FdHostPanelComponent,
    MapContainerComponent,
    MenuTopComponent,
    MapPageComponent,
    HistoricoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rotas,{useHash: true}),
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKeys
    })

  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
