import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {
    path: '',
    component: IniciarSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioSesionRoutingModule { }
