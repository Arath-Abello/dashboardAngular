import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioSesionRoutingModule } from './inicio-sesion-routing.module';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IniciarSesionComponent
  ],
  imports: [
    CommonModule,
    InicioSesionRoutingModule,
    SharedModule
  ]
})
export class InicioSesionModule { }
