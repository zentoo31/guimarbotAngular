import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  options404: AnimationOptions = {
    path: '../assets/animations-json/404.animation.json',
    loop: true
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }


}
