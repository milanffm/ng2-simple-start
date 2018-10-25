import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '@app/core/services/post.service';
import {LoginService} from '@app/core/services/login.service';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
	posts: any[];
	test: any;
	jwt: string;
	public backendUrl = 'http://localhost:1337';

	constructor(
		private _router: Router,
		private _postService: PostService,
		private _loginService: LoginService ) {
	}

	ngOnInit() {
		this._postService.getPosts()
			.subscribe(res => this.posts = res);

		this.login();
	}

	goToPost(slug) {
		this._router.navigate(['/posts/', slug]);
	}
	login() {
		this._loginService.checkLogin().subscribe(res =>  {
			this.test = res;
			// this.jwt = res.jwt;
			console.log(this.test);
			this.getIntern();
		});
	}

	getIntern() {
		this._loginService.getIntern(this.test.jwt).subscribe(res =>  {
			console.log(res);
		});
	}
}
