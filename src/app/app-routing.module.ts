import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'category/:id', component: CategoriesComponent }, 
  { path: 'category/Spor', component: SportsComponent }, 
  { path: '**', redirectTo: '' },
  { path: 'category/:categoryName', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
