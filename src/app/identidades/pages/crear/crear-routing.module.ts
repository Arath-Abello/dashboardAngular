import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearIdentidadesComponent } from './crear-identidades/crear-identidades.component';

const routes: Routes = [
  {
    path: '',
    component: CrearIdentidadesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearRoutingModule { }
