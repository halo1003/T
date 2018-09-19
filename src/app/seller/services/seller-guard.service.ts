import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../core/services/localstorage.service';

@Injectable()
export class SellerGuardService implements CanActivateChild {

    constructor(private lc_storage_service: LocalStorageService) { }

    canActivateChild() {                        
        if (this.lc_storage_service.getRole() !== "ROLE_CLECK"){
            alert("This page for Seller only");
            return false;
        }      
        return true;          
    }
}
