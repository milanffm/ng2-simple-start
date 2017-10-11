import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
    posts: [string];
    constructor(
        private _router: Router,
        private _postService: PostService) {
    }
    ngOnInit() {
        this._postService.getPosts()
            .subscribe(resPostData => this.posts = resPostData.posts);

    }
    goToPost(slug: string) {
        this._router.navigate(['/posts/', slug]);
    }
}
