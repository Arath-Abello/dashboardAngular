import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./bienvenido/bienvenido.module').then(modulo => modulo.BienvenidoModule),
  },
  {
    path: 'empresa',
    loadChildren: ()=> import('./empresa/empresa.module').then(m => m.EmpresaModule)
  },
  {
    path: 'identidadesTabla',
    loadChildren: ()=> import('./identidades/identidades.module').then(m => m.IdentidadesModule)
  },
  {
    path: 'publicidad',
    loadChildren: ()=> import('./publicidad/publicidad.module').then(m => m.PublicidadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
