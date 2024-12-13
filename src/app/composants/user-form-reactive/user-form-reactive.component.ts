import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-reactive',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form-reactive.component.html',
  styleUrl: './user-form-reactive.component.css'
})
export class UserFormReactiveComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire avec FormBuilder
    this.userForm = this.fb.group({
      name: ['', [Validators.required]], // Nom obligatoire
      email: ['', [Validators.required, Validators.email]], // Email obligatoire et valide
      password: ['', [Validators.required, Validators.minLength(6)]], // Mot de passe obligatoire, min 6 caractères
    });
  }

  // Méthode appelée à la soumission du formulaire
  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Formulaire soumis :', this.userForm.value);
    } else {
      console.log('Formulaire invalide.');
    }
  }
}
