import {Component, OnInit} from '@angular/core';
import {CookiesService} from '@app/core/services/cookies.service';

@Component({
	selector: 'app-cookies-accepted',
	template: `
        <div class="cookies-accepted" *ngIf="!cookieAccepted">
            <p>Cookies helfen uns unsere Dienstleistungen anzubieten. Wenn Sie unsere Dienstleistungen nutzen, sind Sie damit einverstanden.</p>
            <div class="button" (click)="acceptCookies()">ok</div>
            <a class="more" >mehr dazu</a>
        </div>
    `,
	styleUrls: ['./cookies-accepted.component.scss']
})
export class CookiesAcceptedComponent implements OnInit {

	cookieAccepted = false;
	COOKIE = 'cookies-accepted';

	constructor(private _cookiesService: CookiesService) {
	}

	ngOnInit() {
		this.checkCookieAccepted();
	}

	acceptCookies() {
		this._cookiesService.setCookie(this.COOKIE, 'true');
		this.checkCookieAccepted();
	}

	checkCookieAccepted() {
		this.cookieAccepted = this._cookiesService.getCookie(this.COOKIE) === 'true';
	}
}
