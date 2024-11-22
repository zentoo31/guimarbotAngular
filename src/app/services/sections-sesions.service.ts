import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SectionWithSessions } from '../models/sections-sessions';

@Injectable({
  providedIn: 'root'
})

export class SectionsSesionsService {
  baseURL: string = "http://localhost:3000/api/user-session";
  httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  async getAllSectionsAndSessionsBySubjectId(id:string): Promise<SectionWithSessions[]>{ 
    const sections = await firstValueFrom(this.httpClient.get<SectionWithSessions[]>(this.baseURL + '/get-all-sections-and-sessions/' + id, {withCredentials: true}));
    return sections ?? [];
  }


}
