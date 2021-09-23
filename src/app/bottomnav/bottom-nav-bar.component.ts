import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-bottom-nav-bar',
    templateUrl: './bottom-nav-bar.component.html',
    styleUrls: ['./bottom-nav-bar.component.css']
  })

export class BottomNavBarComponent{

  month: number;
  day: number;
  year: number;
  hour: number;
  minute: number;
  second: number;
  colon: string;
  constructor() {

    const date = new Date();
    this.day = date.getDay();
    this.month = date.getMonth();
    this.year = date.getFullYear();
    this.hour = date.getHours();
    const hour2 = this.hour.toString();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    this.colon = ":";

  }
}