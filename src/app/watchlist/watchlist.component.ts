import { Component } from "@angular/core";
import { WatchlistService } from "src/services/watchlist/watchlist.service";
import { Stock } from "../stock.model";

@Component({
    selector: "app-watchlist",
    templateUrl: "./watchlist.component.html",
    styleUrls: ["./watchlist.component.css"]
})

export class WatchlistComponent{
    stocks:Stock[] = [];

    constructor(private watchlistService:WatchlistService) { 
      this.getWatchlist();
    }

    getWatchlist()
    {
        this.watchlistService.getWatchlist().subscribe((data: Stock[]) => {
            console.log(data);
            let i = 0;
            for (var point in data)
            {
                console.log(data[point]);
                i++;
                this.stocks.push(new Stock(data[point]));
            }
        });
    }
  }