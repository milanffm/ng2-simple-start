import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';


import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from '@app/core/core.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { PostsModule } from './posts/posts.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
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
export class AppModule { }
