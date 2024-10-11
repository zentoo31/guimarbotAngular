import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post!: Post;
}
