import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {extract} from 'app/core/services/i18n.service';

import {NewsComponent} from './news.component';

const routes: Routes = [
	{
		path: 'news',
		component: NewsComponent,
		data: {title: extract('News'), metaDescriptionTranslationPath: extract('Post Meta Description')}
	},
	{path: 'news/:slug', component: NewsComponent, data: {title: extract('News')}}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})
export class PostRoutingModule {
}
