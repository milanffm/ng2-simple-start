import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './component/slider/carousel.component';
import { SlideComponent } from './component/slider/slide.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CarouselComponent, SlideComponent],
    exports: [ CarouselComponent, SlideComponent]
})
export class SharedModule { }
