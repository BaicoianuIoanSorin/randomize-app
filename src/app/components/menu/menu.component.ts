import { Component } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";
import {MENU_GENERAL_ITEMS} from "../constants/MenuEnum";

@Component({
  selector: 'randomize-menu',
  template:`
    <nb-menu [items]="items">
    </nb-menu>
  `,
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent{
  items: NbMenuItem[] = MENU_GENERAL_ITEMS;
}
