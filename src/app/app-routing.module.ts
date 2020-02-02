import { PlayerstatComponent } from './playerstat/playerstat.component';
import { BiddingComponent } from './bidding/bidding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AnalyseComponent } from './analyse/analyse.component';


const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    pathMatch:"full"
  },
  {
    path:"home",
    component:MainComponent
  },
  {
    path:"analyse",
    component:AnalyseComponent
  },
  {
    path:"iplstat",
    component:BiddingComponent
  },
  {
    path:'player',
    component:PlayerstatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
