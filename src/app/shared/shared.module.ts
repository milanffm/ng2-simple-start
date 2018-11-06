import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarouselComponent} from './component/slider/carousel.component';
import {SlideComponent} from './component/slider/slide.component';
import {ModalComponent} from './component/modal-component/modal.component';

import {SafeHTML} from './safe-html.pipe';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		CarouselComponent,
		SlideComponent,
		ModalComponent,
		SafeHTML
	],
	exports: [
		CarouselComponent,
		SlideComponent,
		ModalComponent,
		SafeHTML
	]
})
export class SharedModule {
}
