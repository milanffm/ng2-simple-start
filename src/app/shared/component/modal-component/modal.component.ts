import {Component, OnInit, Input, OnDestroy , Output, EventEmitter, Renderer2, ElementRef} from '@angular/core';
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
export class ModalComponent implements OnInit, OnDestroy {

	state = 'inactive';

	@Input() modalClass: string;
	@Input() showModal: false;
	@Output() closeModal = new EventEmitter<boolean>();

	constructor(private _el: ElementRef, private _rd: Renderer2) {
		this._rd.addClass(document.body, 'modal-open');
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
	}
	ngOnDestroy() {
		this._rd.removeClass(document.body, 'modal-open');
	}

}
