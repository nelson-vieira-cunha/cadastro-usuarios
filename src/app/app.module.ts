import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuariosService } from 'src/usuario.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaManterComponent } from './core/pages/tela-manter/tela-manter.component';
import { TelaInicialComponent } from './core/pages/tela-inicial/tela-inicial.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaManterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
