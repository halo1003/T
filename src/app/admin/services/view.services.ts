import { Observable } from 'rxjs';
import { users } from './../models/users.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
});

@Injectable({
    providedIn: 'root'
})
export class ViewServices {

    constructor(private httpClient: HttpClient) {
    }

    public viewUsers() {
        return this.httpClient.get<users[]>('http://localhost:8080/user/all');
    }

    public paginationUsername(index: number) {
        return this.httpClient.get('http://localhost:8080/user/?page=' + index + '&?size=5&?sort=ASC&e=username');
    }

    public paginationID(index: number) {
        return this.httpClient.get('http://localhost:8080/user/?page=' + index + '&?size=5&?sort=ASC&e=id');
    }

    public paginationAge(index: number) {
        return this.httpClient.get('http://localhost:8080/user/?page=' + index + '&?size=5&?sort=ASC&e=age');
    }

    public paginationName(index: number) {
        return this.httpClient.get('http://localhost:8080/user/?page=' + index + '&?size=5&?sort=ASC&e=name');
    }

    public viewUsersByID(id: number) {
        return this.httpClient.get('http://localhost:8080/user/'+id)
    }

    public distinctName() {
        return this.httpClient.get('http://localhost:8080/user/distinctname')
    }

    public distinctUsername() {
        return this.httpClient.get('http://localhost:8080/user/distinctuser')
    }

    public viewUsersByUsername(u) {
       return this.httpClient.get('http://localhost:8080/user/username?u='+u)
    }

    public viewUsersByName(n, index) {
        return this.httpClient.get('http://localhost:8080/user/name?n='+ n +'&page='+ index +'&size=5&sort=asc')
    }
}