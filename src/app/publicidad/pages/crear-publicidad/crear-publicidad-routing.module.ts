import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pages/crear/crear.component';

const routes: Routes = [
  {
    path: '',
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearPublicidadRoutingModule { }
