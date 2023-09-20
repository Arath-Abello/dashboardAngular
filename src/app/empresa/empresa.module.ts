import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EmpresaRoutingModule } from './empresa-routing.module';

import { EmpresaPageComponent } from './pages/empresa-page/empresa-page.component';


@NgModule({
  declarations: [
    EmpresaPageComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    SharedModule
  ]
})
export class EmpresaModule { }
