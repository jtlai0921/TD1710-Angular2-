import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'works',
    component:WorksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
