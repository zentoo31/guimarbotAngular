import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient:HttpClient = inject(HttpClient);
  baseURL:string = "http://localhost:3000/api/auth";

  constructor() { };


  // register():Observable<boolean>{
  //   return true;
  // }


}
