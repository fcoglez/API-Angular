import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { DashboardComponent } from './view/dashboard/dashboard.component';
// import { NewUserComponent } from './view/new-user/new-user.component';
// import { EditUserComponent } from './view/edit-user/edit-user.component';
import { AppRoutingModule , routingComponent} from './app-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  
  declarations: [
    AppComponent,
    routingComponent,
    // DashboardComponent,
    // NewUserComponent,
    // EditUserComponent,

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
