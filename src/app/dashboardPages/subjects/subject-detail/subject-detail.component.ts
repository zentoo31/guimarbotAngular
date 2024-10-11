import { Component, inject } from '@angular/core';
import { Subject } from '../../../models/subject';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-subject-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './subject-detail.component.html',
  styleUrl: './subject-detail.component.css'
})
export class SubjectDetailComponent {
  subject!: Subject;
  subjectDetail!: Subject[];
  id!:string;
  private route = inject(ActivatedRoute);

  constructor() {
    const id = this.route.snapshot.params['id'];
    this.subjectDetail = [
      {
        id: '7b04399d-d953-4f77-8032-9ed984e65b3b',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXW4On2_DBbF7L82gzLUhRvCYncrc_Sg1rA&s',
        title: 'React',
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
    this.id = id;
    this.loadSubject();
  }

  loadSubject(){
    switch(this.id){
      case '7b04399d-d953-4f77-8032-9ed984e65b3b':
        this.subject = this.subjectDetail[0];
        break;
      case '9083268a-b00c-4eab-ac52-7668d2864bf9':
        this.subject = this.subjectDetail[1];
        break;
      case '98cbb786-3bca-40d7-9a3b-dec1ca17f07c':
        this.subject = this.subjectDetail[2];
        break;
      case 'b48b8311-a33a-4500-aaa9-04614dfc2f0c':
        this.subject = this.subjectDetail[3];
        break;
      case '4e479ebc-e400-4b89-a881-3afdbd9df273':
        this.subject = this.subjectDetail[4];
        break;
      case 'bd9cf778-d8a0-4a5e-8b8d-2fcd707ce64d':
        this.subject = this.subjectDetail[5];
        break;
      case 'b9e56252-3b96-472f-b3f1-1b35d65fa3d6':
        this.subject = this.subjectDetail[6];
        break;
      case 'f2438b46-279c-4918-9d09-b9232b8380bc':
        this.subject = this.subjectDetail[7];
        break;
      case '4c005ca8-f226-4d6b-b129-7d42e9c78687':
        this.subject = this.subjectDetail[8];
        break;
      case 'd98cfbdf-110f-44e7-854d-c8fefe44b1c7':
        this.subject = this.subjectDetail[9];
        break;
      default:
        break;
    }
  }
}
