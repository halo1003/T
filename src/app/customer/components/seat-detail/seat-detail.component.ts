import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bbts-seat-detail',
    templateUrl: './seat-detail.component.html',
    styleUrls: ['./seat-detail.component.css']
})
export class SeatDetailComponent{

    @Input() number = '';
    @Input() price = '';
    @Input() from = '';
    @Input() to = '';
    @Input() stime = '';
    @Input() busnumber = '';

    @Output() cancel = new EventEmitter();
}
