import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

import { PostService } from '../services/post.service';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  declarations: [
    PostsComponent
  ],
  providers: [ PostService ]
})
export class PostsModule { }
