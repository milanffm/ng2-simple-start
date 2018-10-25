
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {environment} from '@env/environment';
const baseUrl = `${environment.apiUrl}`;

import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class LoginService {
	private _loginUrl = `${baseUrl}auth/local`; // the api url where we need to make a call
	constructor(private _http: HttpClient) {} // this initialized the HttpClient which we use to do a post or get call

	// setting body of the parameters to send via post
	private body = new HttpParams()
		.set('username', 'mitglied')
		.set('password', 'dienstag');

	checkLogin() {
		return this._http.post(this._loginUrl,
			this.body.toString(),
			{
				headers: new HttpHeaders()
					.set('Content-Type', 'application/x-www-form-urlencoded')
			}
		)
			.pipe(
				catchError(this.handleError) // then handle the error
			);
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError(
			'Something bad happened; please try again later.');
	}
}