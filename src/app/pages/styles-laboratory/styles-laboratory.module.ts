import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from '@/pages/styles-laboratory/about/about.component';
import { ContactComponent } from '@/pages/styles-laboratory/contact/contact.component';
import { IndexComponent } from '@/pages/styles-laboratory/index/index.component';
import { PortfolioComponent } from '@/pages/styles-laboratory/portfolio/portfolio.component';
import { StylesLaboratoryRoutingModule } from '@/pages/styles-laboratory/styles-laboratory-routing.module';
import { StylesLaboratoryComponent } from '@/pages/styles-laboratory/styles-laboratory.component';

import { AngularMaterialModule } from '@/shared/modules/angular-material/angular-material.module';

@NgModule({
  declarations: [
    StylesLaboratoryComponent,
    AboutComponent,
    ContactComponent,
    IndexComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    StylesLaboratoryRoutingModule,
    AngularMaterialModule
  ]
})
export class StylesLaboratoryModule { }
