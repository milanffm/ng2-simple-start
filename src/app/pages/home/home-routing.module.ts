import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {extract} from 'app/core/services/i18n.service';

import {HomeComponent} from './home.component';

const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{
		path: 'home',
		component: HomeComponent,
		data: {title: extract('Home'), metaDescriptionTranslationPath: extract('Home Meta Description')}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})
export class HomeRoutingModule {
}
