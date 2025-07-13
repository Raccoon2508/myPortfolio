import { Component } from '@angular/core';

import { MAIN_PAGE_NAV_CARDS } from '@/shared/data/main-page-nav-cards-data';
import { AngularMaterialModule } from '@/shared/modules/angular-material/angular-material.module';
import { SharedComponentsModule } from '@/shared/modules/shared-components/shared-components.module';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true,
  imports: [AngularMaterialModule, SharedComponentsModule]
})
export class MainPageComponent {
  cards = MAIN_PAGE_NAV_CARDS;

}
