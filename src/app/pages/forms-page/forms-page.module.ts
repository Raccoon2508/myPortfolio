import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AddFormCardComponent } from '@/components/add-form-card/add-form-card.component';

import { UserFormComponent } from '@/components/user-form/user-form.component';

import { FormsPageComponent } from '@/pages/forms-page/forms-page.component';

import { FormsPageRoutingModule } from '@/pages/forms-page/forms-page.routing.module';
import { AngularMaterialModule } from '@/shared/modules/angular-material/angular-material.module';

@NgModule({
  declarations: [
    UserFormComponent,
    AddFormCardComponent,
    FormsPageComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsPageRoutingModule
  ]
})
export class FormsPageModule { }
