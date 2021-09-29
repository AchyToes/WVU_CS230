import { Component } from "@angular/core";
import { mock_stock } from "../mock-stock";
import { Stock } from "../stock.model";

@Component({
    selector: "app-watchlist",
    templateUrl: "./watchlist.component.html",
    styleUrls: ["./watchlist.component.css"]
})

export class WatchlistComponent{
    
    stocks:Stock[] = [];

    constructor() { 
      for (var stock of mock_stock) {
        this.stocks.push(new Stock(stock));
      }
    }
}