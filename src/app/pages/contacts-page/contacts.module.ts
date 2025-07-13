import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from '@/pages/contacts-page/contacts.routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  exports: []
})
export class ContactsModule { }
