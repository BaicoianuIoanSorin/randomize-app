import { Component } from '@angular/core';
import {NbSidebarService} from "@nebular/theme";
import {MenuTitles} from "../constants/MenuEnum";

@Component({
  selector: 'randomize-layout',
  template: `
      <nb-layout>
        <nb-layout-header fixed>
          <div class="positioning-items">
            <nb-actions>
              <nb-action
                (click)="toggle()"
                [icon]="isToggled ? 'arrowhead-right-outline' : 'arrowhead-left-outline'"
                [ngStyle]="{'cursor' : 'pointer'}"
              ></nb-action>
            </nb-actions>
            <nb-actions>
              <nb-action icon="lock-outline" link="auth"></nb-action>
            </nb-actions>
          </div>
        </nb-layout-header>


        <nb-sidebar>
              <randomize-menu></randomize-menu>
          </nb-sidebar>

          <nb-layout-column class="colored-column-basic">
              <router-outlet></router-outlet>
          </nb-layout-column>
      </nb-layout>
  `,
  styleUrls: ['./randomize-layout.component.scss']
})
export class RandomizeLayoutComponent {

  isToggled: boolean = false;

  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(true);
    this.isToggled = !this.isToggled;
    return false;
  }

  MenuTitles(): typeof MenuTitles {
    return MenuTitles;
  }
}
