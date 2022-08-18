import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

constructor(private http:HttpClient) { }

postuserdata(userdetails: { id: number; username: string; email: string; password: string; })
{
  let options ={
    headers :{

      'Content-Type': 'application/json'

    }
  }
debugger;
  return this.http.post('https://warm-sea-99266.herokuapp.com/user/register', userdetails, options);
}

}
