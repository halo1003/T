import { Injectable, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Http, ResponseType } from '@angular/http';
import 'rxjs/add/operator/map';

import { Authenticate, User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
});

@Injectable({
    providedIn: 'root',
})

export class AuthService implements OnInit {

    private _baseUrl = 'http://localhost:8080/'; 

    constructor(private http: HttpClient) { }

    ngOnInit(): void { }

    login(username: string, password: string){                
        const body = JSON.stringify({
            "username": username,
            "password": password,
        })
        return this.http.post(this._baseUrl + "user/login", body, {
            headers: httpHeaders,
            responseType: 'text'
        });        
    }

    register(username, password, conformpass, name, age, phone, email) {
        const body = JSON.stringify({
            "username": username,
            "password": password,
            "passwordConfirm": conformpass,
            "name": name,
            "phone": phone,
            "email": email,
            "age": age
        })
        return this.http.post('http://localhost:8080/user/create', body, {
            headers: httpHeaders,
            responseType: 'text'
        })
    }


    getUserJSON(token: string) {
        return this.http.get(this._baseUrl + "user/token/" + token);
    }
}
