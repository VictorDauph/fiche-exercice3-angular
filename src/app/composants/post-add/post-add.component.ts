import { Component } from '@angular/core';
import { PostService } from '../../services/post-service.service';
import { Post } from '../../interfaces/PostI';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {
  newPost: Post = { title: '', body: '' };
  apiResponse = ""
  constructor(private postService: PostService) { }

  onAddPost(): void {
    if (this.newPost.title && this.newPost.body) {
      this.postService.createPost(this.newPost).subscribe((post) => {
        console.log('Post ajouté :', post);
        // Réinitialise le formulaire
        this.newPost = { title: '', body: '' };
        this.apiResponse = JSON.stringify(post);
      });
    } else {
      console.log('Formulaire invalide.');
    }
  }
}
