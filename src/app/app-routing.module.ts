import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaManterComponent } from './tela-manter/tela-manter.component';

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
