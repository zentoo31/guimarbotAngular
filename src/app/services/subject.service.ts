import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Subject } from '../models/subject';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  baseURL: string = "http://localhost:3000/api/user-subject";
  httpClient:HttpClient = inject(HttpClient);

  constructor() { }

  async getSubjects(): Promise<Subject[]>{
    const subjects = await firstValueFrom(this.httpClient.get<Subject[]>(this.baseURL + '/get-all', {withCredentials: true}));
    return subjects ?? [];
  }

  async getSubjectById(id: string): Promise<Subject>{
    const subject = await firstValueFrom(this.httpClient.get<Subject>(this.baseURL + '/get/' + id, {withCredentials: true}));
    return subject ?? {};
  }
}
