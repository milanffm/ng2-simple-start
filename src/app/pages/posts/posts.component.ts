import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '@app/core/services/post.service';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
	posts: any[];
	public backendUrl = 'http://localhost:1337';

	constructor(
		private _router: Router,
		private _postService: PostService) {
	}

	ngOnInit() {
		this._postService.getPosts()
			.subscribe(res => this.posts = res);
	}

	goToPost(slug) {
		this._router.navigate(['/posts/', slug]);
	}
}
