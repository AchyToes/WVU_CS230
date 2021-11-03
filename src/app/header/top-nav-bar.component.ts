import { Component, OnInit, DoCheck, SimpleChanges, OnChanges, Input } from '@angular/core';
import { DatabaseService } from 'src/services/database/database.service';
import { StockServiceService } from 'src/services/stock/stock-service.service';
import { WatchlistService } from 'src/services/watchlist/watchlist.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})

export class TopNavBarComponent {

  @Input() text: String = "Symbol/Name";
  stocks: Stock[] = [];
  tempStocks: Stock[] = [];
  constructor(private stockServiceService: StockServiceService,
    private watchlistService: WatchlistService,
    private dbService: DatabaseService) {
      dbService.showData();
  }

  ngOnInit() {
  }

  onUpdateSearch(data: any) {
    console.log(data[0]);
    this.doSearch(data[0]);
  }
  doSearch(input: string) {
    console.log("Gonna send this input: ", input);
    this.stockServiceService.getStocks().subscribe((data: Stock[]) => {
      console.log(data);
      this.watchlistService.getWatchlist().subscribe((bbb: Stock[]) => {
        let i = 0;
        for (var b in bbb) {
          this.tempStocks[i] = bbb[i];
          console.log(this.tempStocks[i]);
          i++;
        }
        for (var point in data) {
          if (data[point].name.includes(input) || data[point].index.includes(input)) {
            console.log('sending this data point to firebase watchlist: ', data[point]);
            this.tempStocks[i] = data[point];
            i++;
          }
        }
        this.watchlistService.addStock(this.tempStocks).subscribe(aaa =>
        console.log(aaa));
            // this.stocks.push(new Stock(data[point]));
      });
    });
  }
}