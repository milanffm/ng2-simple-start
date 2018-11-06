import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '@app/core/services/post.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
	data: any;

	constructor(
		private _router: Router,
		private _postService: PostService) {
	}

	ngOnInit() {
		this._postService.getSportNews().subscribe(data => {
			console.log(data);
			this.data = data;

		});
	}

	goToPost(slug: string) {
		this._router.navigate(['/news/', slug]);
	}
}
