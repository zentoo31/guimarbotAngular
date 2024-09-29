import { Injectable } from '@angular/core';
import { ToastComponent } from '../ui-components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toast!: ToastComponent;
  constructor() { }

  registerToast(toast:ToastComponent){
    this.toast = toast;
  };

  show(message:string){
    this.toast.show(message);
  }
}
