import { Component, inject, Inject } from '@angular/core';
import { SubjectComponent } from './subject/subject.component';
import { Subject } from '../../models/subject';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [SubjectComponent],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {
  subjectList!: Subject[];
  backgroundColor: string = '';
  themeService: ThemeService = inject(ThemeService);

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
      },
      {
        id: 'b48b8311-a33a-4500-aaa9-04614dfc2f0c',
        image: 'https://i.ytimg.com/vi/BhvLIzVL8_o/maxresdefault.jpg',
        title: 'Node.js',
        author: 'Prof. Julia Fernández',
        level: 'Principiante',
        hours: '35h',
        rate: '4.8',
        price: '39.99',
      },
      {
        id: '4e479ebc-e400-4b89-a881-3afdbd9df273',
        image: 'https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg',
        title: 'Python',
        author: 'Dr. Carlos Mendoza',
        level: 'Principiante',
        hours: '35h',
        rate: '4.8',
        price: '19.99',
      },
      {
        id: 'bd9cf778-d8a0-4a5e-8b8d-2fcd707ce64d',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Hmz8cek6vbHPi9sa6MgFSbwvEm6UlsCLCw&s',
        title: 'Java',
        author: 'Lic. Pedro Ruiz',
        level: 'Avanzado',
        hours: '30h',
        rate: '5.0',
        price: '29.99',
      },
      {
        id: 'b9e56252-3b96-472f-b3f1-1b35d65fa3d6',
        image: 'https://i.ytimg.com/vi/AOG-9jARVmY/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAe0FaAidZtBT27W87KhWLW-gJNAA',
        title: 'C++',
        author: 'Prof. Ana García',
        level: 'Principiante',
        hours: '30h',
        rate: '5.0',
        price: '49.99',
      },
      {
        id: 'f2438b46-279c-4918-9d09-b9232b8380bc',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2VbAtYQG8nTavJzm_wvCwKdocuyt17CK9w&s',
        title: 'Ruby',
        author: 'Prof. Elena Morales',
        level: 'Principiante',
        hours: '25h',
        rate: '4.8',
        price: '19.99',
      },
      {
        id: '4c005ca8-f226-4d6b-b129-7d42e9c78687',
        image: 'https://i.blogs.es/b72c12/hero/1366_2000.jpeg',
        title: 'Swift',
        author: 'Lic. Pedro Ruiz',
        level: 'Avanzado',
        hours: '20h',
        rate: '4.9',
        price: '49.99',
      },
      {
        id: 'd98cfbdf-110f-44e7-854d-c8fefe44b1c7',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CcsU_HMxM84_42SUjMEzMdQWM3YqSvSb3w&s',
        title: 'Flutter',
        author: 'Ing. Laura Torres',
        level: 'Principiante',
        hours: '20h',
        rate: '4.5',
        price: '39.99',
      },
    ];
    this.document.title = "Cursos / GuimarBot";
  }

  ngOnInit(){
    this.backgroundColor = this.themeService.getBackgroundColor();
  }

}
