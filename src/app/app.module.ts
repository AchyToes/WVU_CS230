import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from '../app/header/top-nav-bar.component';
import { SideNavBarComponent } from './sidenav/side-nav-bar.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
