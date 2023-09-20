import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentidadesComponent } from './pages/identidades/identidades.component';

const routes: Routes = [
  {
    path: '',
    component: IdentidadesComponent
  },
  {
    path: 'crear-identidad',
    loadChildren: ()=> import('./pages/crear/crear.module').then(m => m.CrearModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentidadesRoutingModule { }
