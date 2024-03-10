import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Property

  username : string = ""
  password : string = ""

  constructor(private api : ApiService, private home : Router){}

  login() {
    if(this.username && this.password){

      // alert(`User Name : ${this.username} Password: ${this.password} `)

      // Compare username & password with admin details
      // for that we should get admin details from : http://localhost:3000/contacts
      // Api call to http://localhost:3000/contacts/10

      this.api.adminDetails().subscribe({
        next:(result:any) => {
          console.log(result);

          if(this.username===result.username && this.password===result.password){

            // alert('Autharization Successfull')

            // then navigate by url, need to navigate to contact-list component
            this.home.navigateByUrl('contact-list')

          }else{
            alert('Invalid Admin Credentials')
          }
          
        },
        error:(err:any) => {
          console.log(err);
          
        }
      })


    }else{
      alert('Please fill the form completely')
    }
  }

}
