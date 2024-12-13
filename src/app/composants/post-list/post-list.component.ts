import { Component } from '@angular/core';
import { Post } from '../../interfaces/PostI';
import { PostService } from '../../services/post-service.service';
import { CommonModule } from '@angular/common';
import { PostAddComponent } from "../post-add/post-add.component";

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, PostAddComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // Récupère les posts via le service
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
