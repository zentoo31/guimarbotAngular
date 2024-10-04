import { Component, Inject, inject, signal, ViewChild } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule,} from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToastComponent } from '../../ui-components/toast/toast.component';
import { ToastService } from '../../services/toast.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, ToastComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @ViewChild(ToastComponent) toast!: ToastComponent;
  authService = inject(AuthService);
  toastService = inject(ToastService);
  router = inject(Router);
  form: FormGroup;
  formErrors = {
    first_name: signal<string>(''),
    last_name: signal<string>(''),
    age: signal<string>(''),
    username: signal<string>(''),
    email: signal<string>(''),
    password: signal<string>(''),
  };

  ngAfterViewInit() {
    this.toastService.registerToast(this.toast);
  }

  formInvalidState = {
    first_name: false,
    last_name: false,
    age: false,
    username: false,
    email: false,
    password: false,
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.form = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    merge([
      this.form.controls['first_name'].statusChanges,
      this.form.controls['first_name'].valueChanges,
      this.form.controls['last_name'].statusChanges,
      this.form.controls['last_name'].valueChanges,
      this.form.controls['username'].statusChanges,
      this.form.controls['username'].valueChanges,
      this.form.controls['email'].statusChanges,
      this.form.controls['email'].valueChanges,
      this.form.controls['password'].statusChanges,
      this.form.controls['password'].valueChanges,
    ])
      .pipe(takeUntilDestroyed())
      .subscribe(() => {});
    this.document.title = 'Registro';
  }

  errorMessages: {
    [key in keyof RegisterComponent['formErrors']]: { [key: string]: string };
  } = {
    email: {
      required: 'Ingresa un correo electrónico',
      email: 'Correo electrónico inválido',
    },
    password: {
      required: 'Ingresa una contraseña',
      minlength: 'La contraseña debe tener al menos 8 caracteres',
    },
    first_name: {
      required: 'Ingresa tu nombre',
    },
    last_name: {
      required: 'Ingresa tu apellido',
    },
    age:{
      required: 'Ingresa tu edad',
    },
    username: {
      required: 'Ingresa tu nombre de usuario',
    },
  };

  updateErrorMessage(
    control: FormControl,
    fieldName: keyof RegisterComponent['formErrors']
  ) {
    const errors = control.errors;
    if (errors) {
      for (const error in errors) {
        this.formErrors[fieldName].set(this.errorMessages[fieldName][error]);
        this.formInvalidState[fieldName] = true;
        return;
      }
    } else {
      this.formErrors[fieldName].set('');
      this.formInvalidState[fieldName] = false;
    }
  }

  validateForm() {
    this.updateErrorMessage(
      this.form.controls['first_name'] as FormControl,
      'first_name'
    );
    this.updateErrorMessage(
      this.form.controls['last_name'] as FormControl,
      'last_name'
    );
    this.updateErrorMessage(
      this.form.controls['username'] as FormControl,
      'username'
    );
    this.updateErrorMessage(
      this.form.controls['age'] as FormControl,
      'age'
    );
    this.updateErrorMessage(
      this.form.controls['email'] as FormControl,
      'email'
    );
    this.updateErrorMessage(
      this.form.controls['password'] as FormControl,
      'password'
    );
  }

  async register() {
    if (this.form.valid) {
      try {
        const response = await this.authService.register(this.form.value);
        if (response) {
          this.toastService.show(response.message, 'bg-[#60ff93]');
        }
        if (response.message == 'Usuario registrado') {
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}
