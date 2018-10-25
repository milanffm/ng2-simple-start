import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {Observable} from 'rxjs/internal/Observable';
const baseUrl = `${environment.apiUrl}`;

interface Posts {
	posts: [object];
}

@Injectable({
	providedIn: 'root'
})
export class PostService {

	constructor(private http: HttpClient) {
	}

	public getPosts(): Observable<any[]> {
		return this.http.get<Posts[]>(`${baseUrl}posts`);
	}

}
