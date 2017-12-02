import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { InventoryService } from './services/inventory.service';
import { AddToCartService } from './services/add-to-cart.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { YoYosComponent } from './components/yo-yos/yo-yos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { YoyoDetailComponent } from './components/yoyo-detail/yoyo-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoYosComponent,
    ProfileComponent,
    AboutComponent,
    CartComponent,
    SignUpComponent,
    LoginComponent,
    AdminComponent,
    YoyoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ InventoryService, AddToCartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
