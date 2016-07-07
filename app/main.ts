import { bootstrap }    from '@angular/platform-browser-dynamic';
import {provide, Component} from '@angular/core';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div>
      <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {
    componentName: 'AppComponent'
}

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS]);
