import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaPageComponent } from './pages/empresa-page/empresa-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresaPageComponent
  },
  {
    path: 'crear-empresa',
    loadChildren: ()=> import('./pages/crear/crear.module').then(m => m.CrearModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
