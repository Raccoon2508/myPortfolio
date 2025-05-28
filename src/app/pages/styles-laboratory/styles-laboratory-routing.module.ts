import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '@/pages/styles-laboratory/about/about.component';
import { ContactComponent } from '@/pages/styles-laboratory/contact/contact.component';
import { IndexComponent } from '@/pages/styles-laboratory/index/index.component';
import { PortfolioComponent } from '@/pages/styles-laboratory/portfolio/portfolio.component';
import { StylesLaboratoryComponent } from '@/pages/styles-laboratory/styles-laboratory.component';
import { StylesLabPath } from '@/shared/constants/app.config';

const routes: Routes = [
  {
    path: '',
    component: StylesLaboratoryComponent,
    children: [
      {
        path: '',
        redirectTo: StylesLabPath.INDEX_PAGE,
        pathMatch: 'full'
      },
      {
        path: StylesLabPath.INDEX_PAGE,
        component: IndexComponent
      },
      {
        path: StylesLabPath.ABOUT_PAGE,
        component: AboutComponent
      },
      {
        path: StylesLabPath.PORTFOLIO_PAGE,
        component: PortfolioComponent
      },
      {
        path: StylesLabPath.CONTACT_PAGE,
        component: ContactComponent
      }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StylesLaboratoryRoutingModule { }
