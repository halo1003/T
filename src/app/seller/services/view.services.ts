import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { ticket } from '../../seller/models/ticket.model';
import { LocalStorageService } from '../../core/services/localstorage.service';
@Injectable({
    providedIn: 'root'
})
export class ViewServices {
    token;
    constructor(
        private httpClient: HttpClient,
        private local: LocalStorageService
    ) {
        this.token=this.local.getToken()
    }

    public viewTickets() {
        return this.httpClient.get<ticket[]>('http://localhost:8080/ticket/all');
    }

    public paginationByTime(index: number) {
        return this.httpClient.get('http://localhost:8080/ticket/?page=' + index + '&size=5&sort=ASC');
    }

    public paginationID(index: number) {
        return this.httpClient.get('http://localhost:8080/ticket/?page='+ index +'&size=5&sort=ASC&e=id')
    }

    public paginationUser(index:number) {
        return this.httpClient.get('http://localhost:8080/ticket/?page='+ index +'&size=5&sort=ASC&e=user')
    }

    public paginationBus(index:number) {
        return this.httpClient.get('http://localhost:8080/ticket/?page='+ index +'&size=5&sort=ASC&e=bus')
    }

    public paginationStartPlace(index: number) {
        return this.httpClient.get('http://localhost:8080/ticket/all?page='+ index +'&size=5&e=tour')
    }

    public paginationEndPlace(index: number) {
        return this.httpClient.get('http://localhost:8080/tour/all?page='+ index +'&size=5&e=endPlace')
    }

    public paginationStartTime(index: number) {
        return this.httpClient.get('http://localhost:8080/tour/all?page='+ index +'&size=5&e=startTime')
    }

    public paginationEndTime(index: number) {
        return this.httpClient.get('http://localhost:8080/tour/all?page='+ index +'&size=5&e=endTime')
    }

    public viewTicketByUserID (id: number) {
        return this.httpClient.get('http://localhost:8080/ticket/user?id='+id)
    }

    public paginateAllTours(index: number) {
        return this.httpClient.get('http://localhost:8080/tour/all?page='+ index +'&size=5&e=startPlace')
    }

    public findTicketByStartPlace(startplace) {
        return this.httpClient.get('http://localhost:8080/ticket/startplace?s='+startplace)
    }

    public findTicketByUsername(u, index) {
        return this.httpClient.get('http://localhost:8080/ticket/findTicketByToken?token='+ this.token +'&page=0&size=5&sort=desc')
    }
}