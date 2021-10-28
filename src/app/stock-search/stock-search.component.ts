import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {

  @Input()
  name!: string;

  @Input()
  index!: string;

  ngOnInit(): void {
  }

}
