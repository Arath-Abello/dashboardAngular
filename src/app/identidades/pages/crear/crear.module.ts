import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearRoutingModule } from './crear-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CrearIdentidadesComponent } from './crear-identidades/crear-identidades.component';


@NgModule({
  declarations: [
    CrearIdentidadesComponent
  ],
  imports: [
    CommonModule,
    CrearRoutingModule,
    SharedModule
  ]
})
export class CrearModule { }
