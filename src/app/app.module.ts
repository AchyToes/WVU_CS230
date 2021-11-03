import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from '../app/header/top-nav-bar.component';
import { SideNavBarComponent } from './sidenav/side-nav-bar.component';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './login/login.component';
import { LayoutMainComponent } from './layout/layout-main.component'
import { TradeCenterComponent } from './trade-center/trade-center.component';
import { LoginDialogComponent } from './login-dialouge/login-dialouge.component';
import { BottomNavBarComponent } from './bottomnav/bottom-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { StocksComponent } from './stocks/stocks.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { MarketsComponent } from './markets/markets.component';
import { ScreenerComponent } from './screener/screener.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchlistStockComponent } from './watchlist-stock/watchlist-stock.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info.component';
import { FormsModule } from '@angular/forms';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    BoardComponent,
    LoginComponent,
    LayoutMainComponent,
    TradeCenterComponent,
    LoginDialogComponent,
    BottomNavBarComponent,
    StocksComponent,
    WatchlistsComponent,
    MarketsComponent,
    ScreenerComponent,
    //TradeCenterComponent,
    WatchlistComponent,
    WatchlistStockComponent,
    UserInfoComponent,
    StockSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Webull-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
