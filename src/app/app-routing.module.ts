import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [

  // contacts = main-contact-list
  // contact-list = home

  { path: 'contacts', loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule) },

  // http://localhost:4200

  { path: "", component : LoginComponent},

  // http://localhost:4200/contact-list

  { path: "contact-list", component : ContactListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
