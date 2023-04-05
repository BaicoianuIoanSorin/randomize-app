import { Component } from '@angular/core';
import {NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'randomize-layout',
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <a href="#" (click)="toggle()"><i class="nb-menu"></i></a>
      </nb-layout-header>

      <nb-sidebar>
        <randomize-menu/>
      </nb-sidebar>

      <nb-layout-column class="colored-column-basic">
        <router-outlet></router-outlet>
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
}
