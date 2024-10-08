import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Sub } from '../models/sub';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  baseURL:string = "http://localhost:3000/api/sub";
  httpClient:HttpClient = inject(HttpClient);

  constructor() { }

  async getSubs():Promise<Sub>{
    const subs = await firstValueFrom(this.httpClient.get<Sub>(this.baseURL + '/get', {withCredentials: true}));
    return subs ?? {};
  }

}
