import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AddComponent } from '../add/add.component';
import { FindComponent } from '../find/find.component';
import { ListComponent } from '../list/list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'add',component:AddComponent},
  {path:'find',component:FindComponent},
  {path:'list',component : ListComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule], declarations:[]
})
export class NavigateRoutingModule { }
