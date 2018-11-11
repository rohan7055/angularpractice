import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {DirectoryComponent} from '../directory/directory.component';
import {RegisterComponent} from '../register/register.component';

const routes:Routes=[
  {path:'home',component:HomeComponent},
{path:'directory/:ninja',component:DirectoryComponent},
{path:'',component:HomeComponent},
{path:'register',component:RegisterComponent},

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents={HomeComponent,DirectoryComponent,RegisterComponent};
