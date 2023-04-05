import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbActionsModule, NbSidebarModule, NbMenuModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RandomizeLayoutComponent } from './components/randomize-layout/randomize-layout.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomizeLayoutComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'randomize-theme'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
