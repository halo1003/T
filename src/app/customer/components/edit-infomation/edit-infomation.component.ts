import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { CustomerService } from '../../services/customer.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
    selector: 'bbts-edit-infomation',
    templateUrl: './edit-infomation.component.html',
    styleUrls: ['./edit-infomation.component.css']
})
export class EditInfomationComponent implements OnInit {

    uid: number;
    username: string;
    fullname: string;
    name: string;
    age: number;
    email: string;
    phone: number;
    role: string;

    _data: any;
    user: any;
    token: string;

    constructor(
        private localstorageservice: LocalStorageService,
        private customerservice: CustomerService,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
        this.uid = this.localstorageservice.getUserID();
        this.username = this.localstorageservice.getUserName();
        this.fullname = this.localstorageservice.getFullName();
        this.age = this.localstorageservice.getAge();
        this.email = this.localstorageservice.getEmail();
        this.phone = this.localstorageservice.getPhone();
        this.role = this.localstorageservice.getRole();
        this.token = this.localstorageservice.getToken();
    }

    update() {
        this.customerservice.updateuser(this.uid, this.email, this.fullname, this.age, this.phone)
            .subscribe(
                data => {
                    alert(data)
                    this.localstorageservice.updateLocalStore();
                    this.authService.getUserJSON(this.token).subscribe(
                        data => {
                            this.user = data;
                            this.localstorageservice.addCurrentUser(this.uid, this.username, this.user.name, this.user.age, this.user.email, this.user.phone, this.role)
                        },
                        err => {
                            alert(err)
                        }
                    )
                },
                err => {
                    alert(err)
                }
            )
    }
}
