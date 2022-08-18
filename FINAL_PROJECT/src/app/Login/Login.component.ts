import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './Login.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService) { }
  Loginform:any;

  ngOnInit() {
    this.Loginform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }


  SubmitForm()
  {
    console.log('submitted');

    let userdata = {

      username: this.Loginform.value.username,
      password: this.Loginform.value.password
    }
   this.loginservice.login(userdata).subscribe(
     (Response:any)=>{
      console.log(Response);

      localStorage.setItem('token', Response['token'])
      // Authenticate:'Barer'

     },error=>{
      console.log(error);
     }


   );}
}
