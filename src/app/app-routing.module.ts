import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import {SigninComponent} from './signin/signin.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import {SignupComponent} from './signup/signup.component';
const routes:Routes=[
  {path:'home',component: HomeComponent},  
  {path:'categories',component: CategoriesComponent},
  {path:'signin',component: SigninComponent},
  {path:'signup',component: SignupComponent},
  {path:'celebrities',component: CelebritiesComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
 
})
export class AppRoutingModule {}

