import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from '../user-list/user-list.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form-template',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form-template.component.html',
  styleUrl: './user-form-template.component.css'
})
export class UserFormTemplateComponent {
  constructor(private userService: UserService) {

  }
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Utilisateur ajouté :', form.value);
      this.userService.addUser(form.value)
    } else {
      console.log('Formulaire invalide.');
    }
  }
}
