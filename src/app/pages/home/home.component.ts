import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	showModal = false;
	NextPhotoInterval = 5000;

	constructor() {
	}

	data: object;

	ngOnInit() {
		console.log('home', this);
		this.data = {
			test: 123,
			test2: 'testtest'
		};
	}

	closeModalHandler() {
		this.showModal = false;
	}

}
