import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {extract} from 'app/core/services/i18n.service';

import {AboutComponent} from './about.component';

const routes: Routes = [
	{
		path: 'about',
		component: AboutComponent,
		data: {title: extract('About'), metaDescriptionTranslationPath: extract('About Meta Description')}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})
export class AboutRoutingModule {
}
