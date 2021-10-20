import { Component } from "@angular/core";
import { StockServiceService } from "src/services/stock-service.service";
import { mock_stock } from "../mock-stock";
import { Stock } from "../stock.model";

@Component({
    selector: "app-watchlist",
    templateUrl: "./watchlist.component.html",
    styleUrls: ["./watchlist.component.css"]
})

export class WatchlistComponent{
    
    stocks:Stock[] = [];
    storageArray:Stock[] = [];

    constructor(private stockServiceService:StockServiceService) { 
      this.getStocks();
      for (var stock of this.storageArray) {
        console.log(stock);
        this.stocks.push(new Stock(stock));
      }
    }
    getStocks()
    {
        this.stockServiceService.getStocks().subscribe((data: Stock[]) => {
            console.log("i subscribed");
            console.log(data);
            let i = 0;
            for (var point in data)
            {
                console.log(data[point]);
                this.storageArray[i] = data[point];
                i++;
                this.stocks.push(new Stock(data[point]));
            }
        });
    }

  }