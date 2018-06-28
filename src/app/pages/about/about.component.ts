import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	showModal = false;
	modalClass: string;

	constructor() {
	}

	ngOnInit() {
	}

	showModalHandler({modalClass = 'dark-theme'}) {
		this.modalClass = modalClass;
		this.showModal = true;
	}

	closeModalHandler() {
		this.showModal = false;
	}

}
