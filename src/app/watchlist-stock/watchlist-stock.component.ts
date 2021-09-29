import { Component, Input, OnInit } from '@angular/core';
import { mock_stock } from '../mock-stock';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-watchlist-stock',
  templateUrl: './watchlist-stock.component.html',
  styleUrls: ['./watchlist-stock.component.css']
})
export class WatchlistStockComponent implements OnInit {

  @Input()
  name!: string;

  @Input()
  index!: string;
  
  @Input()
  value!: string;
  
  @Input()
  change_1!: string;
  
  @Input()
  change_2!: string;
  
  ngOnInit(): void {
  }

}
