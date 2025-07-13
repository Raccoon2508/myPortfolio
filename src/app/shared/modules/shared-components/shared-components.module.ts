import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationCardComponent } from '@/shared/components/navigation-card/navigation-card.component';

@NgModule({
  declarations: [NavigationCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigationCardComponent, RouterModule]
})
export class SharedComponentsModule { }
