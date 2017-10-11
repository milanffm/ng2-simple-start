import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  postsUrl = 'http://localhost:3000/api/post/list';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.postsUrl);
  }

}
