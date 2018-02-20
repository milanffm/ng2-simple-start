import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../core/services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
    posts: [object];
    constructor(
        private _router: Router,
        private _postService: PostService) {
    }
    ngOnInit() {
       this._postService.getPosts().subscribe(data => {
           console.log(data.posts);
           this.posts = data.posts;

       });
    }
    goToPost(slug: string) {
        this._router.navigate(['/posts/', slug]);
    }
}
