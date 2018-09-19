import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { tour } from '../../models/ticket.model';
import { ViewServices } from '../../../seller/services/view.services';

@Component({
    selector: 'bbts-tour-table',
    templateUrl: './tour-table.component.html',
    styleUrls: ['./tour-table.component.css']
})
export class TourTableComponent implements OnInit {

    _data: any;
    tours:tour[]=[];
    page = 1;
    collectionSize: number;
    maxSize = 0;
    constructor(
        private sellerservice: SellerService,
        private viewServices: ViewServices,

    ) { }

    ngOnInit(): void {
        this.paginateViewAllTours(this.page)
    }

    // getAllTour() {
    //     this.sellerservice.getAllTour()
    //         .subscribe(data => {
    //             this._data = data['content']
    //             for (let i = 0; i < this._data.length; i++) {
    //                 this.tours.push(new tour(this._data[i].id, this._data[i].startPlace, this._data[i].endPlace, this._data[i].startTime, this._data[i].endTime, this._data[i].totalSeats))
    //             }
    //         }, err => {
    //             alert(err.message)
    //         })
    // }

    paginateViewAllTours(event: number) {
        this.page = event
        this.tours = []
        this.viewServices.paginateAllTours(this.page-1).subscribe (
            data => {
                this._data = data['content']
                this.maxSize = data['totalPages']
                console.log('22222'+data)
                for (let i = 0; i < this._data.length; i++) {
                    this.tours.push(new tour(this._data[i].id, this._data[i].startPlace, this._data[i].endPlace, this._data[i].startTime, this._data[i].endTime, this._data[i].totalSeats))
                }                
            }, err => {
                alert(err.message)
            }
            )

        }

}
