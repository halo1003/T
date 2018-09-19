export class seat {
    busnum: string;
    busid: number;
    seatid: number;
    price: number;
    isNull: boolean;
    isChoose: boolean;

    constructor(busnum, busid ,seatid, price, isNull, isChoose){
        this.busnum = busnum;
        this.busid = busid
        this.seatid = seatid;
        this.price = price;
        this.isNull = isNull;
        this.isChoose = isChoose;
    }
}

export class VitualSeat {
    seatid: number;
    price: number;
    isNull: boolean;
    isChoose: boolean;    

    constructor(seatid, price, isNull, isChoose) {
        this.seatid = seatid;
        this.price = price;
        this.isNull = isNull;
        this.isChoose = isChoose;
    }
}

export class tour {
    startPlace: string;
    endPlace: string;
    startTime: string;
    endTime: string;
}

export class Bus {

    busNumber: string;
    id: number;
    totalSeat: number;

    constructor(busNumber, id, totalSeat) {
        this.busNumber = busNumber;
        this.id = id;
        this.totalSeat = totalSeat;
    }
}