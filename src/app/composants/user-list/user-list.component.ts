import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserFormTemplateComponent } from "../user-form-template/user-form-template.component";
import { UserFormReactiveComponent } from "../user-form-reactive/user-form-reactive.component";

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterLink, UserFormTemplateComponent, UserFormReactiveComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = [
    {
      id: 1,
      name: 'Alice Dupont',
      email: 'alice.dupont@example.com',
      age: 28,
    },
    {
      id: 2,
      name: 'Jean Martin',
      email: 'jean.martin@example.com',
      age: 35,
    },
    {
      id: 3,
      name: 'Claire Bernard',
      email: 'claire.bernard@example.com',
      age: 24,
    },
    {
      id: 4,
      name: 'Thomas Leroy',
      email: 'thomas.leroy@example.com',
      age: 42,
    },
    {
      id: 5,
      name: 'Marie Curie',
      email: 'marie.curie@example.com',
      age: 30,
    },
  ];


}
