import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form-template',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form-template.component.html',
  styleUrl: './user-form-template.component.css'
})
export class UserFormTemplateComponent {
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Utilisateur ajouté :', form.value);
    } else {
      console.log('Formulaire invalide.');
    }
  }
}
