import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromNavigate from '../../reducers/navigate.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Bus Booking System';

  nav;

  constructor(private store: Store<fromNavigate.State>){
    this.nav = this.store.select("layout");
  }

}
