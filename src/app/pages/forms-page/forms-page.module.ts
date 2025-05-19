import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsPageComponent } from './forms-page.component';
import { AddFormCardComponent } from '../../components/add-form-card/add-form-card.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsPageRoutingModule } from './forms-page.routing.module';

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
