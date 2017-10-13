import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private titleService: Title,
               private translate: TranslateService) {}


  ngOnInit() {
    this.titleService.setTitle('simple App');

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

    const onNavigationEnd = this.router.events.filter(event => event instanceof NavigationEnd);

    // Change page title on navigation or language change, based on route data
    Observable.merge(this.translate.onLangChange, onNavigationEnd)
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
            this.titleService.setTitle(this.translate.instant(title));
            console.log(title);
          }
        });
  }
}
