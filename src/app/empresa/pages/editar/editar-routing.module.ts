import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEmpresaComponent } from './pages/editar-empresa/editar-empresa.component';

const routes: Routes = [
  {
    path: '',
    component: EditarEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarRoutingModule { }
