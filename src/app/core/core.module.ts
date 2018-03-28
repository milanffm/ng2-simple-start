/* 3rd party libraries */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* custom services  */
import { I18nService } from './services/i18n.service';
import { PostService } from './services/post.service';
import { CookiesService } from './services/cookies.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    declarations: [],
    providers: [
        I18nService,
        PostService,
        CookiesService
    ]
})
export class CoreModule {
    /* make sure CoreModule is imported only by one NgModule the AppModule */
    constructor (
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
}