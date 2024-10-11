import { Component } from '@angular/core';

@Component({
  selector: 'toast',
  standalone: true,
  imports: [],
  template: `
    @if (isInvisible) {
      <div class="flex items-center w-full max-w-xs p-4 text-[#0F0F0F] rounded-lg shadow border-[0.5px] {{bg_color}} fixed bottom-5 right-5 animate-fade-in-up" role="alert" [class.show] = "isInvisible">
        <div class="inline-flex items-center justify-center flex-shrink-0">
        <svg width="40" height="40" viewBox="-2.4 -2.4 28.8 28.8" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path opacity=".1" d="m13.818 4.545-.19-.267a2 2 0 0 0-3.255 0l-.19.267a2 2 0 0 1-1.85.825l-.848-.094a2 2 0 0 0-2.209 2.209l.094.849a2 2 0 0 1-.825 1.848l-.267.19a2 2 0 0 0 0 3.255l.267.19a2 2 0 0 1 .825 1.85l-.094.848a2 2 0 0 0 2.209 2.209l.849-.094a2 2 0 0 1 1.848.825l.19.267a2 2 0 0 0 3.255 0l.19-.267a2 2 0 0 1 1.85-.825l.848.094a2 2 0 0 0 2.209-2.209l-.094-.849a2 2 0 0 1 .825-1.848l.267-.19a2 2 0 0 0 0-3.255l-.267-.19a2 2 0 0 1-.825-1.85l.094-.848a2 2 0 0 0-2.209-2.209l-.849.094a2 2 0 0 1-1.848-.825Z" fill="#81ff70"/><path d="m13.818 4.545-.19-.267a2 2 0 0 0-3.255 0l-.19.267a2 2 0 0 1-1.85.825l-.848-.094a2 2 0 0 0-2.209 2.209l.094.849a2 2 0 0 1-.825 1.848l-.267.19a2 2 0 0 0 0 3.255l.267.19a2 2 0 0 1 .825 1.85l-.094.848a2 2 0 0 0 2.209 2.209l.849-.094a2 2 0 0 1 1.848.825l.19.267a2 2 0 0 0 3.255 0l.19-.267a2 2 0 0 1 1.85-.825l.848.094a2 2 0 0 0 2.209-2.209l-.094-.849a2 2 0 0 1 .825-1.848l.267-.19a2 2 0 0 0 0-3.255l-.267-.19a2 2 0 0 1-.825-1.85l.094-.848a2 2 0 0 0-2.209-2.209l-.849.094a2 2 0 0 1-1.848-.825" stroke="#81ff70" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m9 12 1.819 1.819v0c.1.1.262.1.362 0v0L15 10" stroke="#81ff70" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="ms-3 text-sm font-normal" style="font-family: Poppins, sans-serif; font-weight: 500">{{message}}</div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 text-[#0F0F0F] hover:text-gray-900 {{bg_color}} rounded-lg focus:ring-2 focus:ring-green-300 p-1.5 hover:bg-[#b5ffab] inline-flex items-center justify-center h-8 w-8 transition-colors duration-300" data-dismiss-target="#toast-default" aria-label="Close">
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
