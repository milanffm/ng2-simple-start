import {Component, OnDestroy, Input, OnChanges} from '@angular/core';
import {SlideComponent} from './slide.component';

export enum Direction { UNKNOWN, NEXT, PREV }

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnDestroy, OnChanges {

    slides: Array<SlideComponent> = [];
    private currentInterval: any;
    private isPlaying: boolean;
    private destroyed = false;
    private currentSlide: SlideComponent;
    private _interval: number;

    @Input() public noWrap: boolean;
    @Input() public noPause: boolean;
    @Input() public customClass: string;
    @Input() public setIndex = 1;

    @Input() public get interval(): number {
        return this._interval;
    }

    constructor() {
        // console.log('Carousel created');
    }

    ngOnChanges() {
    }

    ngOnDestroy() {
        this.pause();
    }

    /**
     * gotToNext possible slide element
     * @param {SlideComponent} slide
     * @param {Direction} direction
     */
    private goNext(slide: SlideComponent, direction: Direction) {

        if (this.destroyed) {
            return;
        }

        slide.direction = direction;
        slide.active = true;

        if (this.currentSlide) {
            this.currentSlide.direction = direction;
            this.currentSlide.active = false;
        }

        this.currentSlide = slide;
        this.currentSlide.customClass = this.customClass;

        // every time you change slides, reset the timer
        this.restartTimer();
    }

    /**
     * get the slide element by index
     * @param {number} index
     * @returns {SlideComponent}
     */
    private getSlideByIndex(index: number) {
        const len = this.slides.length;
        for (let i = 0; i < len; ++i) {
            if (this.slides[i].index === index) {
                return this.slides[i];
            }
        }
    }
    /**
     * restart Timer
     */
    private restartTimer() {
        this.resetTimer();
        const interval = + this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(() => {
                const nInterval = + this.interval;
                if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length ) {
                    this.next();
                } else {
                    this.pause();
                }
            }, interval);
        }
    }

    /**
     * reset Timer
     */
    private resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = null;
        }
    }

    /**
     *
     * public functions ==================================
     *
     */


    /**
     * get current index
     * @returns {number | number}
     */
    public getCurrentIndex() {
        return !this.currentSlide ? 0 : this.currentSlide.index;
    }


    /**
     * set interval
     * @param {number} value
     */
    public set interval(value: number) {
        this._interval = value;
        this.restartTimer();
    }

    public getInstance() {
        return this;
    }

    /**
     * set the next slide Element
     * @param {SlideComponent} nextSlide
     * @param {Direction} direction
     */
    public select(nextSlide: SlideComponent, direction: Direction = Direction.UNKNOWN) {
        const nextIndex = nextSlide.index;

        if (direction === Direction.UNKNOWN) {
            direction = nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
        }

        // Prevent this user-triggered transition from occurring if there is already one in progress
        if (nextSlide && nextSlide !== this.currentSlide) {
            this.goNext(nextSlide, direction);
        }
    }

    /**
     * go to next slide
     */
    public next() {
        // console.log('next', this.getCurrentIndex());
        const newIndex = (this.getCurrentIndex() + 1) % this.slides.length;

        if (newIndex === 0 && this.noWrap) {
            this.pause();
            return;
        }

        return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
    }

    /**
     * go to prev slide
     */
    public prev() {
        const newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;

        if (this.noWrap && newIndex === this.slides.length - 1) {
            this.pause();
            return;
        }

        return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
    }


    /**
     * play
     */
    public play() {
        // console.log('PLAY');
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }

    /**
     * stop playing
     */
    public pause() {
        // console.log('PAUSE');
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }

    /**
     * add all Slides and set the active slide
     * @param {SlideComponent} slide
     */
    public addSlide(slide: SlideComponent) {

        slide.index = this.slides.length;
        this.slides.push(slide);
        if (this.slides.length === this.setIndex || slide.active) {
            this.select(this.slides[this.slides.length - 1]);
            if (this.slides.length === 1) {
                this.play();
            }
        } else {
            slide.active = false;
        }
    }

    public removeSlide(slide: SlideComponent) {
        slide.index = 0;
        this.slides.length = 0;
    }
}

