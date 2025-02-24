import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserFormTemplateComponent } from "../user-form-template/user-form-template.component";
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterLink, UserFormTemplateComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = [] as any[]
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    // 🔄 Écouter les changements dans le service
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error("Erreur lors du chargement des utilisateurs :", error);
      }
    );
  }
}
