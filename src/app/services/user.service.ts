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

  async getUser():Promise<User>{
    const user = await firstValueFrom(this.httpClient.get<User>(this.baseURL + '/get-info', {withCredentials: true}));
    return user ?? {};
  }



}
