import { Component, Input } from '@angular/core';
import { MeteorStyle } from '../../models/meteor-style';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'meteors',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngFor="let style of meteorStyles; let i = index">
      <span
        [ngStyle]="style"
        class="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
      >
        <div
          class="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent"
        ></div>
      </span>
    </ng-container>
  `,
  styles: `
  :host {
      display: contents;
    }
    @keyframes meteor {
      0% {
        transform: rotate(215deg) translateX(0);
        opacity: 1;
      }
      70% {
        opacity: 1;
      }
      100% {
        transform: rotate(215deg) translateX(-500px);
        opacity: 0;
      }
    }
    .animate-meteor {
      animation: meteor 5s linear infinite;
    }`
})
export class MeteorsComponent {
  @Input() number: number = 20;
  meteorStyles: MeteorStyle[] = [];

  constructor(){
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.meteorStyles = Array.from({ length: this.number }, () => ({
        top: '-5px',
        left: `${Math.floor(Math.random() * window.innerWidth)}px`,
        animationDelay: `${Math.random() * 1 + 0.2}s`,
        animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
      }));
    }
  }
  
}
