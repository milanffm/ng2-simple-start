import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostRoutingModule} from './news-routing.module';
import {NewsComponent} from './news.component';
import {SharedModule} from '@app/shared/shared.module';


@NgModule({
	imports: [
		CommonModule,
		PostRoutingModule,
		SharedModule
	],
	declarations: [
		NewsComponent
	],
	providers: []
})
export class NewsModule {
}
