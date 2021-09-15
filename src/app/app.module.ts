import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from '../app/header/top-nav-bar.component';
import { SideNavBarComponent } from './sidenav/side-nav-bar.component';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './login/login.component';
import { LayoutMainComponent } from './layout/layout-main.component'
import { WidgetCenterComponent } from './widget-center/widget-center.component';
import { LoginDialogComponent } from './login-dialouge/login-dialouge.component';
import { BottomNavBarComponent } from './bottomnav/bottom-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    BoardComponent,
    LoginComponent,
    LayoutMainComponent,
    WidgetCenterComponent,
    LoginDialogComponent,
    BottomNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
