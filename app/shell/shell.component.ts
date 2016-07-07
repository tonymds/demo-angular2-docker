import { Component } from '@angular/core';
import { NavigationComponent } from '../common/navigation/navigation.component'
import { ContentComponent } from '../common/content/content.component'
import {MenuItem} from 'primeng/primeng';

@Component({
    selector: 'shell',
    templateUrl: 'app/shell/shell.component.html',
    styleUrls: ['app/shell/shell.component.css'],
    directives: [ NavigationComponent,ContentComponent ]
})
export class ShellComponent {

    title: string = 'Angular 2 Demo';

    openTabs: MenuItem[];

    ngOnInit() {
      this.openTabs = new Array();
    }

    onMenuClick(module: MenuItem) {
      console.log("push " + JSON.stringify(module));
      this.openTabs.push(module);
    }
}
