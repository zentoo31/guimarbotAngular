import { Component, Inject } from '@angular/core';
import { Subject } from '../../models/subject';
import { DOCUMENT } from '@angular/common';
import { SubjectComponent } from "../subjects/subject/subject.component";
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [SubjectComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  subjectList!: Subject[];

  constructor(@Inject(DOCUMENT) private document: Document){
    this.subjectList = [
      {
        _id: '4e479ebc-e400-4b89-a881-3afdbd9df273',
        image: 'https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg',
        banner: '',
        description: "",
        title: 'Python',
        author: 'Dr. Carlos Mendoza',
        level: 'Principiante',
        hours: '35h',
        rate: '4.8',
        price: '19.99',
        tags: ['Web Development', 'Frontend', 'JavaScript']
      },
      {
        _id: 'bd9cf778-d8a0-4a5e-8b8d-2fcd707ce64d',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Hmz8cek6vbHPi9sa6MgFSbwvEm6UlsCLCw&s',
        banner: '',
        description: "",
        title: 'Java',
        author: 'Lic. Pedro Ruiz',
        level: 'Avanzado',
        hours: '30h',
        rate: '5.0',
        price: '29.99',
        tags: ['Web Development', 'Frontend', 'JavaScript']
      },
      {
        _id: 'b9e56252-3b96-472f-b3f1-1b35d65fa3d6',
        image: 'https://i.ytimg.com/vi/AOG-9jARVmY/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAe0FaAidZtBT27W87KhWLW-gJNAA',
        banner: '',
        description: "",
        title: 'C++',
        author: 'Prof. Ana García',
        level: 'Principiante',
        hours: '30h',
        rate: '5.0',
        price: '49.99',
        tags: ['Web Development', 'Frontend', 'JavaScript']
      },
      {
        _id: 'f2438b46-279c-4918-9d09-b9232b8380bc',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2VbAtYQG8nTavJzm_wvCwKdocuyt17CK9w&s',
        banner: '',
        description: "",
        title: 'Ruby',
        author: 'Prof. Elena Morales',
        level: 'Principiante',
        hours: '25h',
        rate: '4.8',
        price: '19.99',
        tags: ['Web Development', 'Frontend', 'JavaScript']
      }
    ];
    this.document.title = "Favoritos | GuimarBot";
  }

}
