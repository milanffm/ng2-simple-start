import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts.component';
import {SharedModule} from '@app/shared/shared.module';


@NgModule({
	imports: [
		CommonModule,
		PostRoutingModule,
		SharedModule
	],
	declarations: [
		PostsComponent
	],
	providers: []
})
export class PostsModule {
}
