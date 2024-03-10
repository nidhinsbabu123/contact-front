import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactSchema } from '../modules/contacts/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url : string = "http://localhost:3000"

  constructor(private http : HttpClient) { }

  // to get admin details

  adminDetails() {
    
    // Api call to http://localhost:3000/admin/1

    return this.http.get(`${this.base_url}/admin/1`)

  }

  // Get all contacts from the back end - json file

  getallContacts(){

    // API Call to : http://localhost:3000/contacts

    return this.http.get(`${this.base_url}/contacts`)

  }

  // Add user 

  addContact(contact : contactSchema){

    // API Call request to : http://localhost:3000/contacts  -  passed the body

    return this.http.post(`${this.base_url}/contacts`,contact)

  }

  // get existing user (single person)

  getexisting(id : any){
    return this.http.get(`${this.base_url}/contacts/${id}`)
  }

  // Update Contact

  updateContact(id : any, data : contactSchema){

    // API Call : http://localhost:3000/contacts/id

    return this.http.put(`${this.base_url}/contacts/${id}`, data)

  }

  // Delete Contact

  deleteContact(id : any){

    // API Call : http://localhost:3000/contacts/id

    return this.http.delete(`${this.base_url}/contacts/${id}`)

  }


}
