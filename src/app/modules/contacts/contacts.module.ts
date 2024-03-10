import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { MainContactListComponent } from './main-contact-list/main-contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactsComponent,
    MainContactListComponent,
    AddContactComponent,
    EditContactComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule
  ]
})
export class ContactsModule { }
