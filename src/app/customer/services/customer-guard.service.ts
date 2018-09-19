import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../core/services/localstorage.service';

@Injectable()
export class CustomerGuardService implements CanActivate {
    
    constructor(private lc_storage_service: LocalStorageService) { }

    canActivate() {                
        if (this.lc_storage_service.getRole() !== "ROLE_CUSTOMER"){
            alert("This page for Customer only");
            return false;
        }        
        return true;
    }
}

