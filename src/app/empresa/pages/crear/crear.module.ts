import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearRoutingModule } from './crear-routing.module';

import { CrearEmpresaComponent } from './pages/crear-empresa/crear-empresa.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CrearEmpresaComponent
  ],
  imports: [
    CommonModule,
    CrearRoutingModule,
    SharedModule
  ]
})
export class CrearModule { }
