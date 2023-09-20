import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidoRoutingModule } from './bienvenido-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BienvenidoMainPageComponent } from './pages/bienvenido-main-page/bienvenido-main-page.component';

@NgModule({
  declarations: [
    BienvenidoMainPageComponent
  ],
  imports: [
    CommonModule,
    BienvenidoRoutingModule,
    SharedModule
  ]
})
export class BienvenidoModule { }
