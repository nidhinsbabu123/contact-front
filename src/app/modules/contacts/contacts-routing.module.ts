import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { MainContactListComponent } from './main-contact-list/main-contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [

  // http://localhost:4200/contacts

  { path: "", component: MainContactListComponent },

  // http://localhost:4200/contacts/add 

  {path: "add", component: AddContactComponent},

  // http://localhost:4200/contacts/edit/100

  {path: "edit/:id", component: EditContactComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
