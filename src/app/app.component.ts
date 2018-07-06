import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {merge} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

import {environment} from '@env/environment';
import {I18nService} from '@app/core/services/i18n.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private titleService: Title,
		private translateService: TranslateService,
		private i18nService: I18nService,
		private metaService: Meta) {
	}


	ngOnInit() {

		console.log('init');

		// Setup translations
		this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

		const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

		// Change page title and MetaDescription on navigation or language change, based on route data
		merge(this.translateService.onLangChange, onNavigationEnd)
			.pipe(
				map(() => {
					let route = this.activatedRoute;
					while (route.firstChild) {
						route = route.firstChild;
					}
					return route;
				}),
				filter(route => route.outlet === 'primary'),
				mergeMap(route => route.data)
			)
			.subscribe(event => {
				const title = event['title'];
				if (title) {
					this.titleService.setTitle(this.translateService.instant(title));
				}
				if (event['metaDescriptionTranslationPath']) {
					this.translateService.get(event['metaDescriptionTranslationPath'])
						.subscribe((res: string) => {
							const tag = {name: 'description', content: res};
							const attributeSelector = 'name="description"';
							this.metaService.removeTag(attributeSelector);
							this.metaService.addTag(tag, false);
						});
				}
			});

		// Scroll to top of the page after every router change
		this.router.events.subscribe((evt) => {
			if (!(evt instanceof NavigationEnd)) {
				return;
			}
			window.scrollTo(0, 0);
		});
	}
}
