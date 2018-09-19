import { Time } from "@angular/common";

export class startPlace {
    id: number;
    from: string;
}
export class endPlace {
    id: number;
    to: string;
}
export class startTime {
    id: number;
    time: Time;
}
export class endTime {
    id: number;
    time: Time;
}

export class Seat {
    seatid: number;
    seatnumber: string;

    constructor(seatid,seatnumber) {
        this.seatid = seatid;
        this.seatnumber = seatnumber;
    }
}

export class bus {
    idbus: number;
    busNumber: string;
    totalSeat: number;

    constructor(idbus: number, busNumber: string, totalSeat: number) {
        this.idbus = idbus;
        this.busNumber = busNumber;
        this.totalSeat = totalSeat;
    }
}
export class ticket {
    id: number;
    timeCreate: string;
    numberSeat: number;
    idTour: number;
    startPlace: string;
    endPlace: string;
    startTime: string;
    endTime: string;
    busNumber: string;
    userName: string;
    name: string;
}

export class User {
    uid: number;
    username: string;
    fullname: string;
    constructor(uid, username, fullname) {
        this.uid = uid;
        this.username = username;
        this.fullname = fullname;
    }
}

export class tour {
    tid: string;
    from: string;
    to: string;
    timestart: string;
    timeend: string;
    totalseats: number;

    constructor(tid, from, to, timestart, timeend, totalseats) {
        this.tid = tid;
        this.from = from;
        this.to = to;
        this.timestart = timestart;
        this.timeend = timeend;
        this.totalseats = totalseats;
    }
}