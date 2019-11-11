import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { HightlightOptionsService } from './shared/highlight.service';
import { SharedModule } from './shared/shared.module';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, NavbarComponent, ClassBindingComponent, StyleBindingComponent, TwoWayBindingComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [HightlightOptionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
