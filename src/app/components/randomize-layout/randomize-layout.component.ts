import { Component } from '@angular/core';
import {NbSidebarService} from "@nebular/theme";
import {MenuTitles} from "../constants/MenuEnum";

@Component({
  selector: 'randomize-layout',
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <nb-actions class="position-right">
          <nb-action icon="lock-outline" link="auth"></nb-action>
        </nb-actions>
      </nb-layout-header>

      <nb-sidebar>
        <randomize-menu/>
      </nb-sidebar>

      <nb-layout-column class="colored-column-basic">
      </nb-layout-column>
    </nb-layout>
  `,
  styleUrls: ['./randomize-layout.component.scss']
})
export class RandomizeLayoutComponent {

  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  MenuTitles(): typeof MenuTitles {
    return MenuTitles;
  }
}
