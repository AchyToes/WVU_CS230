import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layout/layout-main.component';
import { MarketsComponent } from './markets/markets.component';
import { ScreenerComponent } from './screener/screener.component';
import { StocksComponent } from './stocks/stocks.component';
import { TradeCenterComponent } from './trade-center/trade-center.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';

const routes: Routes = [
  { path: 'watchlists', component: WatchlistsComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'markets', component: MarketsComponent },
  { path: 'screener', component: ScreenerComponent },
  { path: 'trade', component: TradeCenterComponent },
  { path: '', component: LayoutMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule 
{ 

}
