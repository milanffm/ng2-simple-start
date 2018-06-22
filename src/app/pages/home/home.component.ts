import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor() {
	}

	NextPhotoInterval = 3000;
	noPause = true;
	noLoopSlides = false;
	setIndex = 1;

	data: object;

	ngOnInit() {
		console.log('home', this);
		this.data = {
			test: 123,
			test2: 'testtest'
		};
	}

}
