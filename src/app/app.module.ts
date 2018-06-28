import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from '@app/app-routing.module';

import {CoreModule} from '@app/core/core.module';
import {SharedModule} from '@app/shared/shared.module';
import {HomeModule, AboutModule, PostsModule} from '@app/pages/';

import {AppComponent} from './app.component';
import {HeaderComponent} from './base-compontents/';
import {CookiesAcceptedComponent} from './base-compontents/';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';

import {HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
	overrides = <any>{
		'pan': {velocity: 0.1, threshold: 8} // override default settings
	};
}

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CookiesAcceptedComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
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
	providers: [{
		provide: HAMMER_GESTURE_CONFIG,
		useClass: MyHammerConfig
	}],
	bootstrap: [AppComponent]
})
export class AppModule {
}
