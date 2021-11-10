import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from './authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = "https://identitytoolkit.googleapis.com/v1/accounts";
  signUpEndpoint: string = "signUp";

  signInEndpoint: string = "signInWithPassword";
 // API_Key: string = "AIzaSyD1I8t6TOuEgWBFTgQSy7g-ABqCQRI8LU0";
  
  public constructor(private http:HttpClient) { 
  }

  public signup(email: string, password: string) {
      const body = {
        "email": email,
        "password" : password,
        "returnSecureToken" :true
      };
      return this.http.post<AuthResponse>(this.url + ':' + this.signUpEndpoint + '?key=' + 
                                          environment.firebase.apiKey, body);
  }

  public login(email: string, password: string) {
    const body = {
      "email": email,
      "password" : password,
      "returnSecureToken" :true
    };
    return this.http.post<AuthResponse>(this.url + ':' + this.signInEndpoint + '?key=' + 
                                        environment.firebase.apiKey, body);
}

}