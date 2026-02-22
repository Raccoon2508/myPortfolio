import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainMenuComponent } from '@/pages/maps/components/main-menu/main-menu.component';
import { AngularMaterialModule } from '@/shared/modules/angular-material/angular-material.module';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [MainMenuComponent]
})
export class MainMenuModule { }
