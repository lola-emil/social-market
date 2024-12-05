import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsPageComponent } from './feeds-page/feeds-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  // User routes
  {
    path: "",
    component: FeedsPageComponent
  },

  {
    path: "profile",
    component: ProfilePageComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
