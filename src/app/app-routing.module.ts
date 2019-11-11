import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBindingComponent } from './pages/class-binding/class-binding.component';
import { StructuralDirectivesComponent } from './pages/structural-directives/structural-directives.component';
import { StyleBindingComponent } from './pages/style-binding/style-binding.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { UsersComponent } from './pages/users/users.component';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';

const routes: Routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' },
  { path: 'class', component: ClassBindingComponent },
  { path: 'style', component: StyleBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'structural', component: StructuralDirectivesComponent },
  { path: 'hooks', component: LifecycleHooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
