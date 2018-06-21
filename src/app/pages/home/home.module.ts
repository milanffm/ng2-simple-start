import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '@app/shared/shared.module';

@NgModule({
	imports: [
		HomeRoutingModule,
		CommonModule,
		SharedModule
	],
	declarations: [
		HomeComponent
	],
	providers: []
})
export class HomeModule {
}
