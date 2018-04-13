import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { InventoryService } from './services/inventory.service';
import { CreateYoyoService } from './services/create-yoyo.service';
import { UpdateYoyoService } from './services/update-yoyo.service';
import { DeleteYoyoService } from './services/delete-yoyo.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { YoYosComponent } from './components/yo-yos/yo-yos.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { YoyoDetailComponent } from './components/yoyo-detail/yoyo-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoYosComponent,
    AboutComponent,
    AdminComponent,
    YoyoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    InventoryService,
    CreateYoyoService,
    UpdateYoyoService,
    DeleteYoyoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
