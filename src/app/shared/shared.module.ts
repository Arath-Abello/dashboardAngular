import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavegacionComponent } from './components/navegacion/navegacion.component';



@NgModule({
  declarations: [
    NavegacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavegacionComponent
  ]
})
export class SharedModule { }
