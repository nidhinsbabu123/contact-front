import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { contactSchema } from '../contact.model';

@Component({
  selector: 'app-main-contact-list',
  templateUrl: './main-contact-list.component.html',
  styleUrls: ['./main-contact-list.component.css']
})
export class MainContactListComponent implements OnInit {

  // class property
  allcontacts : contactSchema[] = []

  constructor(private api : ApiService){}

  ngOnInit(): void {
    this.getContactList()
  }

  // When main contact list page open, we need to show all the contacts from the back end

  // To get details of all contacts - create a function

  getContactList(){

    this.api.getallContacts().subscribe({
      next:(result : any) => {
        console.log(result);

        // Assign API response to class property

        this.allcontacts = result
        
      },
      error:(err : any) => {
        console.log(err);
        
      }
    })

  }

  // Delete Contact

  deleteContact(id : any){

    this.api.deleteContact(id).subscribe({
      next : (res : any) => {
        console.log(res);

        // Show other persons contact details after deleting a single person
        this.getContactList()
        
      },
      error : (err : any) => {
        console.log(err);
        
      }
    })

  }


}
