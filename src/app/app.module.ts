import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuadrosComponent } from './quadros/quadros.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { ColecoesComponent } from './colecoes/colecoes.component';
import { CategoriasComponent } from './categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    QuadrosComponent,
    ArtistasComponent,
    ColecoesComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
