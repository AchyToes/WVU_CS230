import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { User } from "./user-info.model";
@Injectable()
@Component({
    selector: "app-user-info",
    templateUrl: "user-info.component.html"
})

export class UserInfoComponent implements OnInit{
    myInfo: User | undefined;
    
    constructor(private http:HttpClient){
    }
    ngOnInit(): void {
        console.log("Sending get request to server");
        this.getUserInfo();
        console.log("Showing user info");
        this.showUserInfo();
    }

    getUserInfo() 
    {
        return this.http.get<User>("https://webull-app-df1a5-default-rtdb.firebaseio.com/Myinfo.json");
    }

    showUserInfo()
    {
        this.getUserInfo().subscribe((data: User) => {
            console.log("i subscribed");
            console.log(data);
            this.myInfo = data;
        });
    }
}