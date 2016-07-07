import { Component, OnInit, Injectable, EventEmitter, Output } from '@angular/core';
import {PanelMenu,MenuItem} from 'primeng/primeng';
import {ModulesAPI} from '../../api/modulesAPI';

@Component({
    selector: 'navigation',
    templateUrl: 'app/common/navigation/navigation.component.html',
    styleUrls: ['app/common/navigation/navigation.component.css'],
    directives: [PanelMenu],
})

@Injectable()
export class NavigationComponent {

      private items: MenuItem[];

      @Output() onMenuClick = new EventEmitter<MenuItem>();

      ngOnInit() {

        this.items = new Array();

        for ( const module of ModulesAPI ) {

          var topLevelMenu = {
                label: module.name,
                items: new Array()
              };

          for ( const subModule of module.subModules ) {
            topLevelMenu.items.push({
              label: subModule.name,
              command: (event) => {
                this.onMenuClick.emit({label: subModule.name});
              }
            })
          }

          this.items.push(topLevelMenu);
        }
      }

}
