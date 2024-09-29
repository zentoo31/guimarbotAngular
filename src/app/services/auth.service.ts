import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient:HttpClient = inject(HttpClient);
  baseURL:string = "http://localhost:3000/api/auth";

  constructor() { };

  async register(formValue: any){
    const res = firstValueFrom(await this.httpClient.post<any>(`${this.baseURL}/register`, formValue));
    return res;
  }

  async login(formValue: any){
    const res = firstValueFrom(await this.httpClient.post<any>(`${this.baseURL}/login`, formValue, {withCredentials: true}));
    return res;
  }

  async logout(){
    return this.httpClient.post<any>(`${this.baseURL}/logout`, null, {withCredentials: true});
  }

  isAuth(){
    const res = this.httpClient.get<boolean>(`${this.baseURL}/verify-token`, {withCredentials: true});
    return res;
  }
}
