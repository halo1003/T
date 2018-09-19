import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';

let httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
});

@Injectable()
export class SellerService {
    private _baseUrl = 'http://localhost:8080/';

    constructor(
        private http: HttpClient,
    ) { }

    ngOnInit(): void { }

    checkString(str, contain: string) {
        return str.find(item => item.username === contain);
    }

    findIdBus(str, contain: number) {
        for (let i = 0; i < str.length; i++) {
            if (str[i].tour.id == contain) {
                return i
            }
        }
        return -1
    }

    getAllUsers() {
        return this.http.get(this._baseUrl + "user/all", {
            headers: httpHeaders,
            responseType: 'json'
        });
    }

    getAllStartPlace() {
        return this.http.get(this._baseUrl + "tour/getallstartplace", {
            headers: httpHeaders,
            responseType: 'json'
        })
    }

    getAllBus() {
        return this.http.get(this._baseUrl + "bus/alldistinct", {
            headers: httpHeaders,
            responseType: 'json'
        })
    }

    getAllTour() {
        return this.http.get(this._baseUrl + "tour/all", {
            headers: httpHeaders,
            responseType: 'json'
        })
    }

    getTours() {
        return this.http.get(this._baseUrl + "tour/getAll", {
            headers: httpHeaders,
            responseType: 'json'
        })
    }

    getTourByBus(busNumber) {
        return this.http.get(this._baseUrl + "bus/b=" + busNumber, {
            headers: httpHeaders,
            responseType: 'json'
        })
    }

    getAllBookedSeats(idTour, idBus) {
        return this.http.get(this._baseUrl + "ticket/" + idTour + "/" + idBus, {
            headers: httpHeaders,
            responseType: 'json'
        })
    }

    getSeat(idBus, numberSeat) {
        return this.http.get(this._baseUrl + "seat/b=" + idBus + "/s=" + numberSeat, {
            headers: httpHeaders,
            responseType: 'json'
        })
    }

    getAllEmptyTicket(idTour, idBus) {
        return this.http.get(this._baseUrl + "seat/empty?idT=" + idTour + "&idB=" + idBus, {
            headers: httpHeaders,
            responseType: 'json'
        })
    }

    deleteTicket(id) {
        return this.http.delete(this._baseUrl + "ticket/" + id + "/remove", {
            headers: httpHeaders,
            responseType: 'text'
        })
    }

    updateTourBySeller(ticketid: number, sid: number, tid: number, bid: number, uid: number) {
        const body = {
            "timecreate": moment().format("DD-MM-YYYY HH:mm:ss"),
            "active": true,
            "seat": {
                "idSeat": sid
            },
            "tour": {
                "id": tid
            },
            "bus": {
                "id": bid
            },
            "user": {
                "id": uid
            }
        }

        return this.http.put(this._baseUrl + "ticket/" + ticketid + "/update", body, {
            headers: httpHeaders,
            responseType: 'text'
        })
    }

    getAllEmptySeat(idTour, idBus) {
        return this.http.get(this._baseUrl + "seatEmptyForTour?idTour=" + idTour + "&idBus" + idBus, {
            headers: httpHeaders,
            responseType: 'json'
        })
    }
}