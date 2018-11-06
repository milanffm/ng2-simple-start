import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from '@app/app-routing.module';

import {CoreModule} from '@app/core/core.module';
import {SharedModule} from '@app/shared/shared.module';
import {HomeModule, AboutModule, PostsModule, NewsModule} from '@app/pages/';

import {AppComponent} from './app.component';
import {HeaderComponent} from './base-compontents/';
import {CookiesAcceptedComponent} from './base-compontents/';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';

import {HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig  {
	overrides = <any>{
		'pinch': { enable: false },
		'rotate': { enable: false }
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
		NewsModule,
		AppRoutingModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
	],
	providers: [{
		provide: HAMMER_GESTURE_CONFIG,
		useClass: CustomHammerConfig
	}],
	bootstrap: [AppComponent]
})
export class AppModule {
}
