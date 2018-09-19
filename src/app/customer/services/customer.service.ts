import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';

let httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
});

@Injectable({
    providedIn: 'root',
})

export class CustomerService implements OnInit {

    private _baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    ngOnInit(): void { }

    updateuser(uid, email, fullname, age, phone) {

        const body = JSON.stringify({
            "name": fullname,
            "age": age,
            "phone": phone,
            "email": email,
        })

        return this.http.put(this._baseUrl + "user/" + uid + "/updatebycustomer", body, {
            headers: httpHeaders,
            responseType: 'text'
        });
    }

    getBusesByTour(tourid) {
        return this.http.get(this._baseUrl + "bus/t=" + tourid, {
            headers: httpHeaders,
            responseType: 'json'
        })
    }

    getBookedSeat(tourid, busid) {
        return this.http.get(this._baseUrl + "seat/booked?idT=" + tourid + "&idB=" + busid, {
            headers: httpHeaders,
            responseType: 'json'
        })
    }

    bookingTicket(tid, bid, sn, tk) {
        return this.http.post(this._baseUrl + "ticket/booking?t=" + tid + "&b=" + bid + "&s=" + sn + "&tk=" + tk, {
            headers: httpHeaders,
            responseType: 'text'
        })
    }

    getTicketHistory(tk) {
        return this.http.get(this._baseUrl + "ticket/findTicketByToken?token=" + tk, {
            headers: httpHeaders,
            responseType: 'json'
        })
    }

    delectTicket(id) {
        return this.http.delete(this._baseUrl + "ticket/"+id + "/remove", {
            headers: httpHeaders,
            responseType: 'text'
        })
    }
}
