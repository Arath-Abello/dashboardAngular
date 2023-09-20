import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarEmpresaComponent } from './pages/editar-empresa/editar-empresa.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditarEmpresaComponent
  ],
  imports: [
    CommonModule,
    EditarRoutingModule,
    SharedModule
  ]
})
export class EditarModule { }
