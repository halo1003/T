import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { users } from '../../models/users.model';

import { Store } from '@ngrx/store';

import * as AdminAction from '../../actions/modal.actions';
import * as fromAdmin from '../../reducers/modal.reducers';
import { AdminService } from '../../services/admin.service';
import { ViewServices } from '../../services/view.services';

@Component({
  selector: 'bbts-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  users;
  names;
  usernames;
  collectionSize: number;
  maxSize = 0;
  page = 1;

  _btnId = true;
  _btnUsername = false;
  _btnName = false;
  _btnAge = false;

  constructor(
    private httpClient: HttpClient,
    private store1: Store<fromAdmin.ModalDataState>,
    private store2: Store<fromAdmin.ModalState>,
    private adminService: AdminService,
    private viewServices: ViewServices,

  ) {
    // this.store1.select("modal").subscribe(
    //   data => {
    //     if (!data.isClose) {
    //       this.ngOnInit()
    //     }
    //   }
    // )
  }

  ngOnInit() {
    this.paginationId(this.page);
    this.distinctName();
    this.distinctUsername();
  }

  dataDispatch(userid: number, username: string, password: string, name: string, email: string, phone: number, age: number, role: string) {
    this.store1.dispatch(new AdminAction.ModalOpen(userid, username, password, name, email, phone, age, role));
    this.store2.dispatch(new AdminAction.ModalOpen(userid, username, password, name, email, phone, age, role));
  }

  public removeUser(uid) {
    this.adminService.deleteUser(uid)
      .subscribe(data => {
        alert(data)
        this.viewServices.viewUsers().subscribe(
          data => {
            this.users = data
          }
        )
      }, err => alert(err.message))
  }

  public paginate(event) {
    this.page = event;

    if (this._btnId) {
      this.paginationId(this.page)
    }

    if (this._btnUsername) {
      this.paginationUsername(this.page)
    }

    if (this._btnName) {
      this.paginationName(this.page)
    }

    if (this._btnAge) {
      this.paginationAge(this.page)
    }
  }

  public paginationId(event: number) {

    this._btnId = true;
    this._btnUsername = false;
    this._btnName = false;
    this._btnAge = false;

    this.page = event;
    this.viewServices.paginationID(this.page - 1).subscribe(
      data => {
        this.users = data['content'];
        this.maxSize = data['totalPages'];
        console.log(this.users)
      }
    )
  }

  public paginationUsername(event: number) {

    this._btnId = false;
    this._btnUsername = true;
    this._btnName = false;
    this._btnAge = false;

    this.page = event;
    this.viewServices.paginationUsername(this.page - 1).subscribe(
      data => {
        this.users = data['content'];
        this.maxSize = data['totalPages'];
      }
    )
  }

  public paginationAge(event: number) {
    this._btnId = false;
    this._btnUsername = false;
    this._btnName = false;
    this._btnAge = true;
    this.page = event;
    this.viewServices.paginationAge(this.page - 1).subscribe(
      data => {
        this.users = data['content']
        this.maxSize = data['totalPages'];
      }
    )
  }

  public paginationName(event: number) {
    this._btnId = false;
    this._btnUsername = false;
    this._btnName = true;
    this._btnAge = false;
    this.page = event;
    this.viewServices.paginationName(this.page - 1).subscribe(
      data => {
        this.users = data['content']
        this.maxSize = data['totalPages'];
      }
    )
  }

  public distinctName(){
    this.viewServices.distinctName().subscribe(
      data => {
        this.names=data
       
      }
    )
  }

  public distinctUsername(){
    this.viewServices.distinctUsername().subscribe(
      data => {
        this.usernames=data
        
      }
    )
  }

  public search(username, name) {
     if (username!='' && name=='') {
       return this.viewUsersByUsername(username)
     }

     if (username=='' && name!='') {
       return this.viewUsersByName(name, this.page)
     }

     if (username=='' && name=='') {
      return this.paginationId(this.page)
     }
  }

  public viewUsersByUsername(username) {
    this.users =[]
    this.viewServices.viewUsersByUsername(username).subscribe (
      data => {
        this.users.push(data)
        console.log(data)
      }
    )
  }

  public viewUsersByName(name, event) {
    this.page = event
    this.viewServices.viewUsersByName(name, this.page - 1).subscribe (
      data => {
        this.users = data['content']
        this.maxSize = data['totalPages']
      }
    )
  }

}
