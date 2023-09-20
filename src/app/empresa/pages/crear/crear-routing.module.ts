import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpresaComponent } from './pages/crear-empresa/crear-empresa.component';

const routes: Routes = [
  {
    path: '',
    component: CrearEmpresaComponent
  },
  {
    path: 'editar-empresa',
    loadChildren: ()=> import('../editar/editar.module').then(m => m.EditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearRoutingModule { }
