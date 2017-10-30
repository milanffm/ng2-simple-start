import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Posts {
  posts: [object];
}

@Injectable()
export class PostService {

  postsUrl = 'http://localhost:3000/api/post/list';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Posts>(this.postsUrl);
  }

}
