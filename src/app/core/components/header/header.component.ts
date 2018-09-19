import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers/navigate.reducer';
import * as fromAuth from '../../../auth/reducers/auth.reducer';
import * as CoreAction from '../../actions/navigate.actions'
import { LocalStorageService } from '../../services/localstorage.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
    selector: 'bbts-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    // Section 1  
    nav: Observable<boolean>;
    logo_login;

    username;
    fullname;

    reRender: boolean;

    _data;

    constructor(
        private store: Store<fromRoot.State>,
        private store1: Store<fromAuth.State>,
        private store2: Store<any>,
        private localstorageservice: LocalStorageService,
        private localStorage: LocalStorage
    ) {
        this.nav = this.store.select('layout');
        this.logo_login = this.store1.select('auth');
    }

    ngOnInit() {

        this.store2.select('layout')
            .subscribe(data => {
                this.reRender = data.ReRender
                console.log(this.reRender)
                this.username = this.localstorageservice.getUserName();
                this.fullname = this.localstorageservice.getFullName();
            })
    }

    logout() {
        this.localstorageservice.deleteTodo();
        this.store.dispatch(new CoreAction.ResetAll());
    }

    adminHeader() {
        this.store.dispatch(new CoreAction.AdminMenu());
    }

    @Input() routerLink_login: string | any[] = '/';
    @Input() routerLink_register: string | any[] = '/';

    @Input() routerLink_booking: string | any[] = '/';
    @Input() routerLink_history: string | any[] = '/';
    @Input() routerLink_home: string | any[] = '/';
    @Input() routerLink_edit: string | any[] = '/';

    @Input() routerLink_admin_view: string | any[] = '/';
    @Input() routerLink_admin_create: string | any[] = '/';
    @Input() routerLink_admin_home: string | any[] = '/';

    @Input() routerLink_seller_home: string | any[] = '/';
    @Input() routerLink_seller_ticket: string | any[] = '/';
    @Input() routerLink_seller_update_ticket: string | any[] = '/';
}