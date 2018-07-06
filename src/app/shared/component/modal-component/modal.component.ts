import {Component, OnInit, Input , Output, EventEmitter, Renderer2, ElementRef, OnChanges} from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';


@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	animations: [
		trigger(
			'modalAnimation', [
				transition(':enter', [
					style({opacity: 0}),
					animate(700, style({opacity: 1}))
				]),
				transition(':leave', [
					animate(700, style({opacity: 0}))
				])
			],
		),
	]
})
export class ModalComponent implements OnInit, OnChanges {

	state = 'inactive';

	@Input() modalClass: string;
	@Input() showModal: false;
	@Output() closeModal = new EventEmitter<boolean>();

	constructor(private _el: ElementRef, private _rd: Renderer2) {
	}

	ngOnInit() {
	}

	close(event) {
		const wrapper = this._el.nativeElement.querySelector('.modal-bg'),
			closeBtn = this._el.nativeElement.querySelector('.close');
		if (event.target === closeBtn || event.target === wrapper) {
			this.closeModal.emit();
			this.showModal = false;
		}
		this._rd.removeClass(document.body, 'modal-open');
	}
	ngOnChanges() {
		if (this.showModal) {
			this._rd.addClass(document.body, 'modal-open');
		}
	}
}
