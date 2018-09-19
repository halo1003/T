import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { LocalStorageService } from './services/localstorage.service';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,  
  HeaderComponent,
  FooterComponent,
  ];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [LocalStorageService],
})
export class CoreModule {}
