import { Component, Inject, inject, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { merge } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { ToastComponent } from '../../ui-components/toast/toast.component';
import { ToastService } from '../../services/toast.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, ToastComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild(ToastComponent) toast!: ToastComponent;
  authService = inject(AuthService);
  toastService = inject(ToastService)
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  errorMessageEmail = signal('');
  errorMessagePassword = signal('');
  isEmailInvalid: boolean = false;
  isPasswordInvalid: boolean = false;
  form = new FormGroup({
      email: this.email,
      password: this.password
  });

  ngAfterViewInit(){
    this.toastService.registerToast(this.toast);
  }
  constructor(@Inject(DOCUMENT) private document: Document) {
    merge([this.email.statusChanges, this.email.valueChanges, this.password.statusChanges, this.password.valueChanges])
    .pipe(takeUntilDestroyed())
    .subscribe(() => {});
    this.document.title = 'Iniciar sesión | GuimarBot';
  }

  updateErrorMessageEmail(){
    if (this.email.hasError('required')) {
      this.errorMessageEmail.set('Ingresa un correo electrónico');
      this.isEmailInvalid = true;
    } else if (this.email.hasError('email')) {
      this.errorMessageEmail.set('Correo electrónico inválido');
      this.isEmailInvalid = true;
    } else {
      this.errorMessageEmail.set('');
      this.isEmailInvalid = false;
    }    
  }

  updateErrorMessagePassword(){
    if (this.password.hasError('required')) {
      this.errorMessagePassword.set('Ingresa una contraseña');
      this.isPasswordInvalid = true;
    } else if (this.password.hasError('minlength')) {
      this.errorMessagePassword.set('La contraseña debe tener al menos 8 caracteres');
      this.isPasswordInvalid = true;
    } else {
      this.errorMessagePassword.set('');
      this.isPasswordInvalid = false;
    }
  }

  async login(){
      if(this.form.valid){
        try {
          const response = await this.authService.login(this.form.value);
          if(response){
            this.toastService.show(response.message, 'bg-[#fff]');
          }
        } catch (error) {
          console.error(error);
        }
      }
  }
    
}


