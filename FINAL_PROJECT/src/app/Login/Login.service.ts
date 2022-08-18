import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isLogin:boolean=false;
constructor(private http:HttpClient) { }


CheckUserLogin():boolean
{
return this.isLogin;
}


login(userdata:any): Observable<Object>
{
  let options ={
  headers :{
    'Content-Type': 'application/json'
  }
}
  return this.http.post(`https://warm-sea-99266.herokuapp.com/user/login?username=${userdata.username}&password=${userdata.password}`, null);
}

}
