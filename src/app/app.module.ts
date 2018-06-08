import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';

import {AppRoutingModule} from '@app/app-routing.module';

import {CoreModule} from '@app/core/core.module';
import {SharedModule} from '@app/shared/shared.module';
import {HomeModule, AboutModule, PostsModule} from '@app/pages/';

import {AppComponent} from './app.component';
import {HeaderComponent} from './base-compontents/';
import {CookiesAcceptedComponent} from './base-compontents/';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';

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
		AppRoutingModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
