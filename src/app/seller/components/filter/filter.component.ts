import { Component, OnInit } from '@angular/core';
import { startPlace, ticket } from '../../models/ticket.model';
import { ViewServices } from '../../services/view.services';

@Component({
    selector: 'bbts-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    // startPlaces = [
    //     { id: 1, from: "Quận 1" },
    //     { id: 2, from: "Quận 2" },
    //     { id: 3, from: "Quận 3" },
    //     { id: 4, from: "Quận 4" },
    //     { id: 5, from: "Quận 5" }
    // ];
    endPlaces = [
        { id: 1, to: "Thủ Đức" },
        { id: 2, to: "Bình Duong" },
        { id: 3, to: "Bình Thạnh" },
        { id: 4, to: "Tân Phú" },
        { id: 5, to: "Tân Bình" },
    ];
    startTimes = [
        { id: 1, Time: "12:00" },
        { id: 2, Time: "12:30" },
        { id: 3, Time: "13:00" },
        { id: 4, Time: "13:30" },
        { id: 5, Time: "14:00" },
    ];
    tickets

    // fromSelect = startPlace;

    constructor(private viewServices:ViewServices) { }

    ngOnInit(): void { }

    viewTicketByUserID(id) {
        this.viewServices.viewTicketByUserID(id).subscribe (
            data => {
                console.log(data)
                this.tickets=data
            }
        )
    }
}
