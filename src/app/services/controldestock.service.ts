import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControldestockService {

  baseUrl: string='https://localhost:7265/api/ControlStock';

  constructor(private http: HttpClient) { }


  getControlList(){
    return this.http.get(this.baseUrl);
  }
}
