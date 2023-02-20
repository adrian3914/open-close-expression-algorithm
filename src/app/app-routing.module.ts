import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {
  OpenCloseExpressionCheckerComponent
} from "./open-close-expression-checker/open-close-expression-checker.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'expression', component: OpenCloseExpressionCheckerComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
