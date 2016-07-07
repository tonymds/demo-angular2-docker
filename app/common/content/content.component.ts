import { Component, OnInit, Input } from '@angular/core';
import {TabMenu, MenuItem} from 'primeng/primeng';

@Component({
    selector: 'content',
    templateUrl: 'app/common/content/content.component.html',
    styleUrls: ['app/common/content/content.component.css'],
    directives: [TabMenu],
})

export class ContentComponent {
  @Input()
  openTabs: MenuItem[];
}
