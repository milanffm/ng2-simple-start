import {Component, OnInit, OnDestroy, Input, HostBinding, OnChanges} from '@angular/core';

import {CarouselComponent, Direction} from './carousel.component';
import {animate, query, stagger, style, transition, trigger, group} from '@angular/animations';

@Component({
	selector: 'app-slide',
	template: `
        <div [class.active]="active" *ngIf="active" [ngClass]="'item ' + customClass" [@image] [@text] >
            <ng-content></ng-content>
        </div>
    `,
	styleUrls: ['./slide.compontent.scss'],
	animations: [
		trigger('text', [
			transition(':enter', [
				query('h2', [
					style({  opacity: 0 }),
				], { optional: true}),
				query('h2', [
					style({ transform: 'translateY(100px)' }),
					stagger(100, [
						animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
					])
				], {delay: 500, optional: true})
			]),
			transition(':leave', [
				query('h2', [
					animate('1.2s', style({ opacity: 0, transform: 'translateY(-100px)' }))
				], { optional: true})
			])
		]),
		trigger('image', [
			transition(':enter', [
				query('.image', [
					style({ opacity: 0}),
					animate('1.2s', style({ opacity: 1}))
				], { optional: true})
			]),
			transition(':leave', [
				query('.image', [
					animate('1.2s', style({ opacity: 0}))
				], { optional: true})
			]),
		])
	]
})
export class SlideComponent implements OnInit, OnDestroy, OnChanges {

	@Input() public index: number;
	@Input() public direction: Direction;

	@HostBinding('class.active')
	@Input() public active: boolean;
	@Input() public customClass: string;

	private addClass = true;

	constructor(private carousel: CarouselComponent) {
	}

	public ngOnInit() {
		/**
		 * on init call addSlide function for each slide element from parent component
		 */
		this.carousel.addSlide(this);
	}

	public ngOnDestroy() {
		this.carousel.removeSlide(this);
	}

	public ngOnChanges() {

	}
}
