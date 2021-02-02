import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {GenrePageComponent} from "./genre-page/genre-page.component";

const routes: Routes = [{
  path:'',
  component: HomePageComponent
},{
  path:':genre',
  component: GenrePageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
