import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearPublicidadRoutingModule } from './crear-publicidad-routing.module';
import { CrearComponent } from './pages/crear/crear.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CrearComponent
  ],
  imports: [
    CommonModule,
    CrearPublicidadRoutingModule,
    SharedModule
  ]
})
export class CrearPublicidadModule { }
