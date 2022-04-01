import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { FormsModule } from '@angular/forms';
import { DeclinedComponent } from './declined/declined.component';
import { AcceptedComponent } from './accepted/accepted.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CreateComponent,
    HomeComponent,
    LearnMoreComponent,
    StudentDetailComponent,
    DeclinedComponent,
    AcceptedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
