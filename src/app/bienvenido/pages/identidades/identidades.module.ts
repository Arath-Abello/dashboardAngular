import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentidadesRoutingModule } from './identidades-routing.module';
import { IdentidadesComponent } from './pages/identidades/identidades.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    IdentidadesComponent
  ],
  imports: [
    CommonModule,
    IdentidadesRoutingModule,
    SharedModule,
  ]
})
export class IdentidadesModule { }
