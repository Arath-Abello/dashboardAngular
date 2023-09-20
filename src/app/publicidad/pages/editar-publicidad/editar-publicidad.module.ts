import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarPublicidadRoutingModule } from './editar-publicidad-routing.module';
import { EditarComponent } from './pages/editar/editar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditarComponent
  ],
  imports: [
    CommonModule,
    EditarPublicidadRoutingModule,
    SharedModule
  ]
})
export class EditarPublicidadModule { }
