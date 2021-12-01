import { VestidosComponent } from './opMenu/vestidos/vestidos.component';
import { TopsComponent } from './opMenu/tops/tops.component';
import { SaiasComponent } from './opMenu/saias/saias.component';
import { ProdBelezaComponent } from './opMenu/prod-beleza/prod-beleza.component';
import { PijamasComponent } from './opMenu/pijamas/pijamas.component';
import { ModaPraiaComponent } from './opMenu/moda-praia/moda-praia.component';
import { MacacaoComponent } from './opMenu/macacao/macacao.component';
import { LingerieComponent } from './opMenu/lingerie/lingerie.component';
import { BlusasComponent } from './opMenu/blusas/blusas.component';
import { AcessoriosComponent } from './opMenu/acessorios/acessorios.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'acessorios', component: AcessoriosComponent},
  {path: 'blusas', component: BlusasComponent},
  {path: 'lingeries', component: LingerieComponent},
  {path: 'macacoes', component: MacacaoComponent},
  {path: 'moda-praia', component: ModaPraiaComponent},
  {path: 'pijamas', component: PijamasComponent},
  {path: 'produtos-de-beleza', component: ProdBelezaComponent},
  {path: 'saias', component: SaiasComponent},
  {path: 'tops', component: TopsComponent},
  {path: 'vestidos', component: VestidosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
