import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../core/services/localstorage.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class AdminGuardService implements CanActivateChild {

    _data;
    constructor(
        private lc_storage_service: LocalStorageService,
        private localStorage: LocalStorage,
        ) { }

    canActivateChild() {        
        if (this.lc_storage_service.getRole() !== "ROLE_ADMIN"){
            alert("This page for Admin only");
            return false;
        }      
        return true; 
    }
}
