import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL:string = "http://localhost:3000/api/user";
  httpClient:HttpClient = inject(HttpClient);
  constructor() { }

  async getHeaderUser(): Promise<User>{
    const user = await firstValueFrom(this.httpClient.get<User>(this.baseURL + '/get-headers', {withCredentials: true}));
    return user ?? {};  
  }

  async getUser():Promise<User>{
    const user = await firstValueFrom(this.httpClient.get<User>(this.baseURL + '/get-info', {withCredentials: true}));
    return user ?? {};
  }

  async updateUser(formValue: any): Promise<User>{
    const user = await firstValueFrom(this.httpClient.patch<User>(this.baseURL + '/update', formValue ,  {withCredentials: true}));
    return user ?? {};
  }

  

}
