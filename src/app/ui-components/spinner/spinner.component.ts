import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [LottieComponent],
  template: `
    <div role="status" class="loading-overlay bg-normalBackground">
      <ng-lottie 
    [options]="options"
    (animationCreated)="animationCreated($event)"
    [className]="'w-20 h-20'"
    />
    </div>
  `,
  styles: `
    .loading-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .animate-spin-clockwise {
      animation: spin-clockwise 0.6s infinite;
    }
  `
})

export class SpinnerComponent {
  isLoading: boolean = false;

  options: AnimationOptions = {
    path: '../assets/animations-json/loading.animation.json',
    loop: true
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
