import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusComponent } from './bus/bus.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OtherCategoryComponent } from './other-category/other-category.component';
import { HightlightOptionsService } from './shared/highlight.service';
import { SharedModule } from './shared/shared.module';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TrainComponent } from './train/train.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    BusComponent,
    TrainComponent,
    OtherCategoryComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [HightlightOptionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
