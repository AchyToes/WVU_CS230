import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs/internal/Observable";
import { Stock } from "src/app/stock.model";
@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<Stock []>;
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<Stock>('watchlist_1').valueChanges();
    }
    public showData() {
        this.items.subscribe((data: Stock [] ) => {
            console.log("data received");
            for (let item of data) {
                console.log(item);
            }
        })
    }

}