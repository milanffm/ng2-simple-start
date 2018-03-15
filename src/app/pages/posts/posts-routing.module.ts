import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from 'app/core/services/i18n.service';

import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent, data: { title: extract('Posts'), metaDescriptionTranslationPath: extract('Post Meta Description')} },
  { path: 'posts/:slug', component: PostsComponent, data: { title: extract('Posts')} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PostRoutingModule { }
