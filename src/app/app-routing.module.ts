import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {GenrePageComponent} from "./components/genre-page/genre-page.component";

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
