import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClassBindingComponent } from './pages/class-binding/class-binding.component';
import { StyleBindingComponent } from './pages/style-binding/style-binding.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { StructuralDirectivesComponent } from './pages/structural-directives/structural-directives.component';
import { BusComponent } from './components/bus/bus.component';
import { TrainComponent } from './components/train/train.component';
import { OtherCategoryComponent } from './components/other-category/other-category.component';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { SharedModule } from './shared/shared.module';
import { HightlightOptionsService } from './shared/highlight.service';
import { LogHooksDirective } from './directives/log-hooks.directive';

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
    OtherCategoryComponent,
    LifecycleHooksComponent,
    LogHooksDirective
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [HightlightOptionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
