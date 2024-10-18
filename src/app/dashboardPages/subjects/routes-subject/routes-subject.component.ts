import { Component, Inject } from '@angular/core';
import { SubjectComponent } from '../subject/subject.component';
import { Subject } from '../../../models/subject';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-routes-subject',
  standalone: true,
  imports: [SubjectComponent],
  templateUrl: './routes-subject.component.html',
  styleUrl: './routes-subject.component.css'
})
export class RoutesSubjectComponent {
  subjectList!: Subject[];

  constructor(@Inject(DOCUMENT) private document: Document){
    this.subjectList = [
      {
        id: '7b04399d-d953-4f77-8032-9ed984e65b3b',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXW4On2_DBbF7L82gzLUhRvCYncrc_Sg1rA&s',
        title: 'Angular',
        author: 'Prof. Julia Fernández',
        level: 'Avanzado',
        hours: '20h',
        rate: '5.0',
        price: '29.99',
      },
      {
        id: '9083268a-b00c-4eab-ac52-7668d2864bf9',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmKNBHCfd70Cd46awCM92pr59znb9Nazm7A&s',
        title: 'Vue.js',
        author: 'Ing. Miguel Castro',
        level: 'Avanzado',
        hours: '30h',
        rate: '4.5',
        price: '39.99',
      },
      {
        id: '98cbb786-3bca-40d7-9a3b-dec1ca17f07c',
        image: 'https://blog.facialix.com/wp-content/uploads/2024/07/curso-gratis-de-svelte-js-en-udemy-300x169.jpg',
        title: 'Svelte',
        author: 'Prof. Julia Fernández',
        level: 'Avanzado',
        hours: '40h',
        rate: '4.7',
        price: '29.99',
      }
    ];
    this.document.title = "Ruta desarrollador web / GuimarBot";
  }
}
