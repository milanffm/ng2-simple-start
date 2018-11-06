import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare var ghost: any;

ghost.init({
	clientId: 'ghost-frontend',
	clientSecret: 'cdf29b7643ce'
});

@Injectable()
export class PostService {


	constructor(private http: HttpClient) {
	}

	getPosts() {
		return this.http.get(ghost.url.api('posts', {limit: 3}));
	}
}
