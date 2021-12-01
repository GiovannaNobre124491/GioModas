import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BlusasComponent } from './opMenu/blusas/blusas.component';
import { TopsComponent } from './opMenu/tops/tops.component';
import { ModaPraiaComponent } from './opMenu/moda-praia/moda-praia.component';
import { VestidosComponent } from './opMenu/vestidos/vestidos.component';
import { LingerieComponent } from './opMenu/lingerie/lingerie.component';
import { PijamasComponent } from './opMenu/pijamas/pijamas.component';
import { ProdBelezaComponent } from './opMenu/prod-beleza/prod-beleza.component';
import { SaiasComponent } from './opMenu/saias/saias.component';
import { AcessoriosComponent } from './opMenu/acessorios/acessorios.component';
import { MacacaoComponent } from './opMenu/macacao/macacao.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BlusasComponent,
    TopsComponent,
    ModaPraiaComponent,
    VestidosComponent,
    LingerieComponent,
    PijamasComponent,
    ProdBelezaComponent,
    SaiasComponent,
    AcessoriosComponent,
    MacacaoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
