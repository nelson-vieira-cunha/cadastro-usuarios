import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaManterComponent } from './core/pages/tela-manter/tela-manter.component';
import { TelaInicialComponent } from './core/pages/tela-inicial/tela-inicial.component';



const routes: Routes = [
  {
    path: '',
    component: TelaInicialComponent,
    /*children: [
      { path: 'tela-manter', component: TelaManterComponent },
    ],*/
    pathMatch: 'full'
  },
  {
    path: 'tela-inicial',
    component: TelaInicialComponent,
    /*children: [
      { path: 'tela-manter', component: TelaManterComponent },
    ],*/
    pathMatch: 'full'
  },
  { path: 'tela-manter/incluir', component: TelaManterComponent},
  { path: 'tela-manter/:id', component: TelaManterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
