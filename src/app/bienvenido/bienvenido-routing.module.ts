import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidoMainPageComponent } from './pages/bienvenido-main-page/bienvenido-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoMainPageComponent
  },
  {
    path: 'crear-cuenta',
    loadChildren: ()=> import('./pages/registro/registro.module').then(m => m.RegistroModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren:()=> import('./pages/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionModule)
  },
  {
    path: 'identidades',
    loadChildren: ()=> import('./pages/identidades/identidades.module').then(m => m.IdentidadesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienvenidoRoutingModule { }
