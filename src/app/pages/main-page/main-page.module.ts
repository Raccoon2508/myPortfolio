import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page.routing.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    AngularMaterialModule
  ]
})
export class MainPageModule { }
