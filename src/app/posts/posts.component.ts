import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    results: string[];

    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient, private router: Router) {
    }

    goToPost(slug: string) {

        this.router.navigate(['/posts/', slug]);

    }

    ngOnInit(): void {
        // Make the HTTP request:
        this.http.get('http://localhost:3000/api/post/list').subscribe(data => {
            // Read the result field from the JSON response.
            this.results = data['posts'];
            console.log(this.results);
        });
    }
}
