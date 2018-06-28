import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarouselComponent} from './component/slider/carousel.component';
import {SlideComponent} from './component/slider/slide.component';
import {ModalComponent} from './component/modal-component/modal.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		CarouselComponent,
		SlideComponent,
		ModalComponent
	],
	exports: [
		CarouselComponent,
		SlideComponent,
		ModalComponent
	]
})
export class SharedModule {
}
