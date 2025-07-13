import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainPageRoutingModule } from '@/pages/main-page/main-page.routing.module';
import { AngularMaterialModule } from '@/shared/modules/angular-material/angular-material.module';
import { SharedComponentsModule } from '@/shared/modules/shared-components/shared-components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    AngularMaterialModule,
    SharedComponentsModule
  ],
  exports: [SharedComponentsModule]
})
export class MainPageModule { }
