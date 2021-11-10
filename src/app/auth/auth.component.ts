import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "src/services/auth/auth.service";
import { AuthResponse } from "src/services/auth/authResponse";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})

export class AuthComponent {
    public buttonClicked!:string;
    private authObservable!: Observable<AuthResponse>;

    constructor(private authService: AuthService) { }

    public onSubmit(form: NgForm) {
        console.log("Button clicked was: ", this.buttonClicked);
        console.log(form.value);
        const email = form.value.email;
        const password = form.value.password;
        form.resetForm;
        if (this.buttonClicked == 'login')
        {
            this.authObservable=this.authService.login(email, password);
        }
        else 
        {
            this.authObservable=this.authService.signup(email, password);
        }
        this.authObservable.subscribe(
            (response: AuthResponse) => {
                console.log(response);
                console.log("Successfully authenticated.");
            },
            (error: any) => {
                console.log(error);
                console.log("Failed to authenticate.");
            },  
        );        
    }
    
}