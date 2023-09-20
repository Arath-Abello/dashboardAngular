import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CrearCuentaComponent,
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    SharedModule
  ]
})
export class RegistroModule { }
