import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SimulacionesComponent } from './pages/simulaciones/simulaciones.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    SimulacionesComponent,
    NavBarComponent,
    InicioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
