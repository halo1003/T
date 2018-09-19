import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as fromAdmin from '../reducers/modal.reducers';
import { Store } from '@ngrx/store';

let httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
});

@Injectable()
export class AdminService {

    private _baseUrl = 'http://localhost:8080/';

    constructor(
        private http: HttpClient,
        private store: Store<fromAdmin.ModalDataState>
        ) { }

    ngOnInit(): void { }

    createUser(username, password, confirm , email, fullname, age, phone){
        const body = JSON.stringify({
            "username": username,
            "password": password,
            "passwordConfirm": confirm,
            "name": fullname,
            "age": age,
            "phone": phone,
            "email": email,
        })  
        
        return this.http.post(this._baseUrl + "user/create", body, {
            headers: httpHeaders,
            responseType: 'text'
        });
    }

    updateRole(uid,roleid){
        const body = JSON.stringify({
            "roles": [{
                "id": roleid
            }]
        })  
        
        return this.http.put(this._baseUrl + "user/"+ uid + "/setrole", body, {
            headers: httpHeaders,
            responseType: 'text'
        });
    }

    updateUser(uid, username, password, email, fullname, age, phone) {

        this.store.select("modaldata")
        .subscribe(
            data => {
                
                if (username == null) username = data.username
                if (password == null) password = data.password                    
                if (fullname == null) fullname = data.fullname
                if (email == null) email = data.email
                if (phone == null) phone = data.phone
                if (age ==null) age = data.age
            }
        )

        const body = JSON.stringify({
            "username": username,
            "password": password,
            "name": fullname,
            "age": age,
            "phone": phone,
            "email": email,
        })        
        
        return this.http.put(this._baseUrl + "user/" + uid + "/updatebyadmin", body, {
            headers: httpHeaders,
            responseType: 'text'
        });
    }

    deleteUser(uid){
        return this.http.delete(this._baseUrl + "user/" + uid + "/remove",{
            headers: httpHeaders,
            responseType: 'text'
        })
    }
}