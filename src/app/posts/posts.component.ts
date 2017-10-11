import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
    results: any;

    goToPost(slug: string) {

        this._router.navigate(['/posts/', slug]);

    }

    // Inject HttpClient into your component or service.
    constructor(
        private _http: HttpClient,
        private _router: Router,
        private _postService: PostService) {
    }
    ngOnInit(): void {
        this.results = this._postService.getPosts();
        console.log(this.results);
    }
}
