import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from 'src/app/stock.model';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private baseUrl: string = 'https://webull-app-df1a5-default-rtdb.firebaseio.com/';
  private watchlistEndpoint: string = 'watchlist_1.json/';

  constructor(private http:HttpClient) 
    {
    }

  getWatchlist() 
  {
      return this.http.get<Stock[]>(this.baseUrl + this.watchlistEndpoint);
  }

  addStock(sendStock: Stock[])
  {
    return this.http.put<Stock[]>(this.baseUrl + this.watchlistEndpoint, sendStock);
  }
}
