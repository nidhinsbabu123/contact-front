import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { contactSchema } from '../contact.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  // class property

  contact : contactSchema = {}

  constructor(private route : ActivatedRoute, private api : ApiService){}

  ngOnInit(): void {

    this.existingContact(this.contact.id)
    
  }


  existingContact(id : any){

    this.route.params.subscribe((res : any) => {
      console.log(res);

      const {id} = res

      console.log(id);

      this.api.getexisting(id).subscribe({
        next : (res : any) => {
          console.log(res);

          this.contact = res
          
        },
        error : (err : any) => {
          console.log(err);
          
        }
      })
      
      
    })

  }



  updateContact(){
    this.api.updateContact(this.contact.id, this.contact).subscribe({
      next : (res : any) => {
        console.log(res);

        alert('Updated Successfully')
        
      },
      error : (err : any) => {
        console.log(err);

        alert('Cannot perform action now')
        
      }
    })
  }

  cancelUpdate(contactId : any){

    this.existingContact(contactId)

  }

}
