import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicidadRoutingModule } from './publicidad-routing.module';
import { PublicidadPageComponent } from './pages/publicidad-page/publicidad-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PublicidadPageComponent
  ],
  imports: [
    CommonModule,
    PublicidadRoutingModule,
    SharedModule
  ]
})
export class PublicidadModule { }
