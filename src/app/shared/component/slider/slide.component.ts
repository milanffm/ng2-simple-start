import {Component, OnInit, OnDestroy, Input, HostBinding, OnChanges } from '@angular/core';

import {CarouselComponent, Direction } from  './carousel.component';
import {animate, style, transition, trigger} from'@angular/animations';

@Component({
    selector: 'app-slide',
    template: `
        <div [class.active]="active" *ngIf="active" [ngClass]="customClass" [@slideBgAnimation] >
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./slide.compontent.scss'],
    animations: [
        trigger(
            'slideBgAnimation', [
                transition(':enter', [
                    style({ opacity: 0 }),
                    animate(500, style({ opacity: 1 }))
                ]),
                transition(':leave', [
                    animate(500, style({ opacity: 0 }))
                ])
            ],
        ),
    ]
})
export class SlideComponent implements OnInit, OnDestroy, OnChanges {

    @Input() public index: number;
    @Input() public direction: Direction;

    @HostBinding('class.active')
    @Input() public active: boolean;
    @Input() public customClass: string;

    @HostBinding('class.item')
    @HostBinding('class.carousel-item')
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
