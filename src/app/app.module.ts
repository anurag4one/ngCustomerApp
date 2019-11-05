import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';
import { NavigateRoutingModule } from './navigate/navigate-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    FindComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavigateRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
