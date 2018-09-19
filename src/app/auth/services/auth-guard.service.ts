import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { LocalStorage } from '@ngx-pwa/local-storage';
import { LocalStorageService } from '../../core/services/localstorage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(
        protected localStorage: LocalStorage,
        private localstorageservice: LocalStorageService
    ) {

    }

    isLoginDetect(): boolean {
        var username = this.localstorageservice.getUserName();
        if (username == null) {            
            return true
        }        
        return false
    }

    canActivate() {
        return this.isLoginDetect();
    }

}
