import {provideRouter,RouterConfig} from '@angular/router';
import {ShellComponent} from './shell/shell.component'

export const routes: RouterConfig = [
    {path: '', component: ShellComponent},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
