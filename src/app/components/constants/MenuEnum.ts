import {ENVIRONMENT_INITIALIZER} from "@angular/core";
import {NbMenuItem} from "@nebular/theme";

export enum MenuTitles {
  AUTHENTICATE = 'Authenticate'
}

export const MENU_GENERAL_ITEMS: NbMenuItem[] = [
  {
    title: MenuTitles.AUTHENTICATE,
    link: 'auth',
    icon: 'plus-outline',
  }
]
