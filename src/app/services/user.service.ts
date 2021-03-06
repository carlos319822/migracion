import { Injectable } from '@angular/core';
import { User,  } from '../interfaces/user';
import { Response } from '../interfaces/response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string ='https://localhost:7265/api/User/';

  constructor(private htpp:HttpClient, private router: Router) { }

  register(User:User){
    return this.htpp.post(this.baseUrl+'Register',User);

  }
  
  login(User:User){

    return this.htpp.post(this.baseUrl+'Login',User);
  }

  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
    this.router.navigate(['/login']);
    window.location.reload();
  }

  get getUsername(){
    return localStorage.getItem('userName');
  }

  get isAutenticado(){
    return !!localStorage.getItem('token_value');
  }

}
