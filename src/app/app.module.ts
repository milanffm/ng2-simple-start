import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';


import {AppRoutingModule} from '@app/app-routing.module';

import {CoreModule} from '@app/core/core.module';
import {SharedModule} from '@app/shared/shared.module';
import {HomeModule, AboutModule, PostsModule} from '@app/pages/';

import {AppComponent} from './app.component';
import {HeaderComponent} from './base-compontents/header/header.component';
import {CookiesAcceptedComponent} from '@app/base-compontents/cookies-accepted/cookies-accepted.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CookiesAcceptedComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule,
		TranslateModule.forRoot(),
		HttpClientModule,
		HomeModule,
		AboutModule,
		PostsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
