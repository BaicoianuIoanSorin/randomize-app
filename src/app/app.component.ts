import { Component } from '@angular/core';
import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  template:`
    <randomize-layout/>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'randomize-app';
}
