import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicidadPageComponent } from './pages/publicidad-page/publicidad-page.component';

const routes: Routes = [
  {
    path: '',
    component: PublicidadPageComponent
  },
  {
    path: 'editar-publicidad',
    loadChildren: ()=> import('./pages/editar-publicidad/editar-publicidad.module').then(m => m.EditarPublicidadModule)
  },
  {
    path: 'crear-publicidad',
    loadChildren: ()=> import('./pages/crear-publicidad/crear-publicidad.module').then(m =>m.CrearPublicidadModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicidadRoutingModule { }
