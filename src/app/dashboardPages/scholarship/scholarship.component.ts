import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-scholarship',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './scholarship.component.html',
  styleUrl: './scholarship.component.css'
})
export class ScholarshipComponent {
  becaForm: FormGroup;
  cvFileName: string = '';
  certificadosFileNames: string[] = [];

  constructor(private fb: FormBuilder) {
    this.becaForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required],
      motivacion: ['', Validators.required],
      cv: [null, Validators.required],
      certificados: [null],
      terminos: [false, Validators.requiredTrue]
    });
  }

  onFileChange(event: any, fileType: 'cv' | 'certificados') {
    const files = event.target.files;
    if (files.length > 0) {
      if (fileType === 'cv') {
        this.cvFileName = files[0].name;
        this.becaForm.patchValue({ cv: files[0] });
      } else {
        this.certificadosFileNames = Array.from(files).map((file: any) => file.name);
        this.becaForm.patchValue({ certificados: files });
      }
    }
  }

  onSubmit() {
    if (this.becaForm.valid) {
      console.log('Formulario enviado', this.becaForm.value);
      // Aquí iría la lógica para enviar el formulario al servidor
    } else {
      console.log('Formulario inválido');
    }
  }
}
