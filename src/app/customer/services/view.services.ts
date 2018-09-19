
import { Injectable } from '@angular/core';
import { tour } from './../../customer/models/seat.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


let httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
});
@Injectable ({
    providedIn: 'root'
})

export class ViewServices {
    today: Date = new Date();
    constructor(private httpClient:HttpClient) {

    }

    public viewTours() {
        return this.httpClient.get('http://localhost:8080/tour/all');
    }

    public paginateAllTours(index: number) {
        return this.httpClient.get('http://localhost:8080/tour/all?page='+ index +'&size=5&e=startPlace')
    }

    public viewToursByAll(s,e,t, index) {
       if(t!=='') {
           t=t+"T00:00:00";
       }
       console.log('http://localhost:8080/tour/trip?s='+s+'&e='+e+'&t='+t)
        return this.httpClient.get('http://localhost:8080/tour/trip?s='+s+'&e='+e+'&t='+t+'&page='+index+'&size=5&sort=asc&el=');
    }

    public viewToursByStartPlace(s, index) {
        return this.httpClient.get('http://localhost:8080/tour/startplace?s='+ s +'&page='+index+'&size=5&sort=ASC')
    }

    public viewToursByEndPlace(e, index) {
        return this.httpClient.get('http://localhost:8080/tour/endplace?e='+ e +'&page='+index+'&size=5&sort=ASC')
    }

    public viewToursByStartTime(s, index) {
        if(s!=='') {
            s=s+"T00:00:00";
        }
        console.log('http://localhost:8080/tour/starttime?s='+ s +'&page='+index+'&size=5&sort=ASC')
        return this.httpClient.get('http://localhost:8080/tour/starttime?s='+ s +'&page='+index+'&size=5&sort=ASC')
    }

    public viewToursByStartPlaceEndPlace(s, e, index) {
        return this.httpClient.get('http://localhost:8080/tour/spandep?s='+s+'&e='+e+'&page='+index+'&size=5&sort=ASC')
    }

    public viewToursByStartPlaceStartTime(s, t, index) {
        if(t!=='') {
            t=t+"T00:00:00";
        }
        console.log('http://localhost:8080/tour/spandst?s='+ s +'&t='+ t +'&page='+index+'&size=5&sort=ASC')
        return this.httpClient.get('http://localhost:8080/tour/spandst?s='+ s +'&t='+ t +'&page='+index+'&size=5&sort=ASC')

    }

    public viewToursByEndPlaceStartTime(s, t, index) {
        if(t!=='') {
            t=t+"T00:00:00";
        }
        console.log('http://localhost:8080/tour/epandst?s='+ s +'&t='+ t +'&page='+index+'&size=5&sort=ASC')
        return this.httpClient.get('http://localhost:8080/tour/epandst?s='+ s +'&t='+ t +'&page='+index+'&size=5&sort=ASC')
    }

    public startPlaceDistinct() {
        return this.httpClient.get('http://localhost:8080/tour/distinctstartplace')
    }

    public endPlaceDistinct() {
        return this.httpClient.get('http://localhost:8080/tour/distinctendplace')
    }
}