import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AdminRoutingModule } from './admin-routing.module';
import { CreatePageComponent } from './containers/create-page/create-page.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { ManageUserPageComponent } from './containers/manage-user-page/manage-user-page.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UpdateUserPageComponent } from './containers/update-user-page/update-user-page.component';
import { HomeAdminPageComponent } from '../admin/containers/home-page/home-page.component';

import { SidebarModule } from 'ng-sidebar';
import { ModalDataReducer, ModalReducer } from './reducers/modal.reducers';
import { AdminGuardService } from './services/admin-guard.service';
import { ViewServices } from './services/view.services';
import { AdminService } from './services/admin.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const COMPONENTS = [
  CreatePageComponent,
  CreateFormComponent,
  AvatarComponent,

  ManageUserComponent,
  ManageUserPageComponent,
  UpdateUserComponent,
  UpdateUserPageComponent,

  HomeAdminPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,    
    NgxPaginationModule,
    NgbModule.forRoot(), 

    SidebarModule.forRoot(),  
    StoreModule.forFeature('modaldata', ModalDataReducer),  
    StoreModule.forFeature('modal', ModalReducer),  
  ],  
  declarations: COMPONENTS,
  providers: [AdminGuardService,ViewServices,AdminService],
})
export class AdminModule { }
