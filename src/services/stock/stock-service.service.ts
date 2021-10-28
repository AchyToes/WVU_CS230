import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from 'src/app/stock.model';

@Injectable({
  providedIn: 'root',
})
export class StockServiceService {
  private baseUrl: string = 'https://webull-app-df1a5-default-rtdb.firebaseio.com/';
  private stockEndpoint: string = 'stocks.json';

  constructor(private http:HttpClient) 
    {
    }

  getStocks() 
  {
      return this.http.get<Stock[]>(this.baseUrl + this.stockEndpoint);
  }
}
