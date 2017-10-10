import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {}

  getPosts(): void {
    this.http.get('http://localhost:3000/api/post/list').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data['posts']);
      return data['posts'];
    });
  }

}
