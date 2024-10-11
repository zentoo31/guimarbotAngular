import { Component, inject } from '@angular/core';
import { PostDetail } from '../../../models/post-detail';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
private route = inject(ActivatedRoute);
post!: PostDetail;
listPost!: PostDetail[];
id!: string;

constructor() {
  const id = this.route.snapshot.params['id'];

  this.listPost = [{
    id: '4f906359-2778-4b3f-95fd-208c824eb984',
    author: 'User1',
    profilePic: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png',
    date: 'hace 3 horas',
    content: 'Este es el primer post',
    likes: 15,
    comments: 3,
    shares: 1,
    commentsDe: [
      {
        id: '1-1',
        author: 'Commenter1',
        profilePic: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png',
        date: 'hace 1 hora',
        content: 'Este es un comentario en el primer post',
        likes: 2,
        comments: 0,
        shares: 0,
        commentsDe: []
      }
    ]
  },
  {
    id:'97faf7c4-05dd-4ff7-baaf-5d7a26acd9e5',
    author: 'User2',
    profilePic: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png',
    date: 'hace 5 horas',
    content: 'Este es el segundo post',
    likes: 20,
    comments: 5,
    shares: 2,
    commentsDe: []
  },
  {
    id: '1991d885-f3e2-4a11-8c03-8499c574b319',
    author: 'User3',
    profilePic: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png',
    date: 'hace 1 día',
    content: 'Este es el tercer post',
    likes: 30,
    comments: 8,
    shares: 3,
    commentsDe: []
  },
  {
    id: 'bdfc0aa4-8101-4b5d-a537-a52df6af6dd3',
    author: 'User4',
    profilePic: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png',
    date: 'hace 2 días',
    content: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum',
    likes: 40,
    comments: 12,
    shares: 4,
    commentsDe: []
  },
  {
    id: '3cd99b3c-67ec-401b-bd99-86ac582f26a7',
    author: 'User5',
    profilePic: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png',
    date: 'hace 3 días',
    content: 'Este es el quinto post',
    likes: 25,
    comments: 6,
    shares: 2,
    commentsDe: []
  },
  {
    id: 'ac98321d-5cfa-4235-9bf8-52c10f07bbf2',
    author: 'User6',
    profilePic: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png',
    date: 'hace 4 días',
    content: 'Este es el sexto post',
    likes: 35,
    comments: 10,
    shares: 5,
    commentsDe: []
  },
  {
    id: '61de4538-f102-4e28-a434-8e420775f012',
    author: 'User7',
    profilePic: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png',
    date: 'hace 1 semana',
    content: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum',
    likes: 50,
    comments: 15,
    shares: 6,
    commentsDe: []
  },
  {
    id: '2f0cd753-efef-4dfa-8fd4-a3906cd0ac59',
    author: 'User8',
    profilePic: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png',
    date: 'hace 2 semanas',
    content: 'Este es el octavo post',
    likes: 60,
    comments: 18,
    shares: 7,
    commentsDe: []
  },
  {
    id:'bf1ed3a2-0fa4-4b66-9981-b78952195061',
    author: 'User9',
    profilePic: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png',
    date: 'hace 3 semanas',
    content: 'Este es el noveno post',
    likes: 70,
    comments: 20,
    shares: 8,
    commentsDe: []
  },
  {
    id: '831541c6-cb96-426f-89fc-434bb627ca0d',
    author: 'User10',
    profilePic: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png',
    date: 'hace 1 mes',
    content: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum',
    likes: 80,
    comments: 25,
    shares: 9,
    commentsDe: []
  }];
  this.id = id;
  this.loadPost();
}


loadPost() {
  // this.post = this.postService.getPost(this.id);
  switch (this.id) {
    case '4f906359-2778-4b3f-95fd-208c824eb984':
      this.post = this.listPost[0];
      break;
    case '97faf7c4-05dd-4ff7-baaf-5d7a26acd9e5':
      this.post = this.listPost[1];
      break;
    case '1991d885-f3e2-4a11-8c03-8499c574b319':
      this.post = this.listPost[2];
      break;
    case 'bdfc0aa4-8101-4b5d-a537-a52df6af6dd3':
      this.post = this.listPost[3];
      break;
    case '3cd99b3c-67ec-401b-bd99-86ac582f26a7':
      this.post = this.listPost[4];
      break;
    case 'ac98321d-5cfa-4235-9bf8-52c10f07bbf2':
      this.post = this.listPost[5];
      break;
    case '61de4538-f102-4e28-a434-8e420775f012':
      this.post = this.listPost[6];
      break;
    case '2f0cd753-efef-4dfa-8fd4-a3906cd0ac59':
      this.post = this.listPost[7];
      break;
    case 'bf1ed3a2-0fa4-4b66-9981-b78952195061':
      this.post = this.listPost[8];
      break;
    case '831541c6-cb96-426f-89fc-434bb627ca0d':
      this.post = this.listPost[9];
      break;
    default:
      break;
  }
}

}
