import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts.component';


@NgModule({
	imports: [
		CommonModule,
		PostRoutingModule
	],
	declarations: [
		PostsComponent
	],
	providers: []
})
export class PostsModule {
}
