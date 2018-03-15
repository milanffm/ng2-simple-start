import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { environment } from '@env/environment';
import { Logger } from '@app/core/services/logger.service';
import { I18nService } from '@app/core/services/i18n.service';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private titleService: Title,
                private translateService: TranslateService,
                private i18nService: I18nService,
                private metaService: Meta) { }


  ngOnInit() {
      // Setup logger
      if (environment.production) {
          Logger.enableProductionMode();
      }

      log.debug('init');

      // Setup translations
      this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

      const onNavigationEnd = this.router.events.filter(event => event instanceof NavigationEnd);

      // Change page title and MetaDescription on navigation or language change, based on route data
      Observable.merge(this.translateService.onLangChange, onNavigationEnd)
          .map(() => {
              let route = this.activatedRoute;
              while (route.firstChild) {
                  route = route.firstChild;
              }
              return route;
          })
          .filter(route => route.outlet === 'primary')
          .mergeMap(route => route.data)
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

  }
}
