import { Component } from '@angular/core';

@Component({
  selector: 'toast',
  standalone: true,
  imports: [],
  template: `
    @if (isInvisible) {
      <div class="flex items-center w-full max-w-xs p-4 text-white rounded-lg shadow {{bg_color}} fixed bottom-5 right-5 animate-fade-in-up" role="alert" [class.show] = "isInvisible">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>              
        </div>
        <div class="ms-3 text-sm font-normal">{{message}}</div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 text-white hover:text-gray-900 {{bg_color}} rounded-lg focus:ring-2 focus:ring-green-300 p-1.5 hover:bg-green-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-default" aria-label="Close">
            <span class="sr-only" (click)="closeToast()">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
      </div>
    }
  `,
  styles: `
  .show{
    opacity: 1;
  }
  `
})
export class ToastComponent {
  isInvisible:boolean = false;
  message: string = "";
  bg_color: string = "";

  show(message:string, bg_color:string){
    this.message = message;
    this.bg_color = bg_color;
    this.isInvisible = true;
    setTimeout(() => {
      this.closeToast();
    }, 3000);
  }

  closeToast(){
    this.isInvisible = false
  }
}
