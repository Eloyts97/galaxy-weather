import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarComponent } from './components/buscar/buscar.component';
import { HomeComponent } from './components/home/home.component';
import { LugaresComponent } from './components/lugares/lugares.component';

const routes: Routes = [
  {path: '', component: BuscarComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'lugares-guardados', component: LugaresComponent},
  {path: 'home/:city', component: HomeComponent},
  {path: '**', component: BuscarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
