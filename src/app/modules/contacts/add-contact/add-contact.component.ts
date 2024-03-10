import { Component } from '@angular/core';
import { contactSchema } from '../contact.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  contact : contactSchema = {}

  constructor(private api:ApiService){}

  addContact(){
    const{id, name, email, photo, mobile, company, title, groupId} = this.contact

    if(!id || !name || !email || !photo || !mobile || !company || !title || !groupId){

      alert('Please fill the form completely')

    }else{

      // alert('Save button clicked')

      this.api.addContact(this.contact).subscribe({
        next : (res : any) => {
          alert('New Contact Added')
        },
        error : (err : any) => {
          alert('Cannot add the contact')
        }
      })

    }

  }

  // Cancel Function

  cancel(){
    this.contact = {}
  }

}
