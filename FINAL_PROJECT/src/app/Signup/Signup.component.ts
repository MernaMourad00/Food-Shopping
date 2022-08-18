import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SignupService } from './Signup.service';

@Component({
  selector: 'app-Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signup:SignupService,private dataform: FormBuilder) { }

  Signupform:any;

  ngOnInit() {
    this.Signupform = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  SubmitForm()
  {
    console.log('submitted');

    let userdetails = {
      id: 1,
      username: this.Signupform.value.username,
      email: this.Signupform.value.email,
      password: this.Signupform.value.password
    }
   this.signup.postuserdata(userdetails).subscribe(
     Response=>{
      console.log(Response);

     },error=>{
      console.log(error);
     }


   );}
}
