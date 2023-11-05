import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SportsComponent } from './sports/sports.component';
import { ScienceComponent } from './science/science.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { TechnologyComponent } from './technology/technology.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'category/Anasayfa', component: HomepageComponent }, 
  { path: 'category/Kategoriler', component: CategoriesComponent }, 
  { path: 'category/Is-Dunyasi', component: BusinessComponent }, 
  { path: 'category/Eglence', component: EntertainmentComponent }, 
  { path: 'category/Genel', component: GeneralComponent }, 
  { path: 'category/Saglik', component: HealthComponent }, 
  { path: 'category/Bilim', component: ScienceComponent }, 
  { path: 'category/Spor', component: SportsComponent }, 
  { path: 'category/Teknoloji', component: TechnologyComponent }, 
  { path: 'category/Hakkimizda', component: AboutComponent }, 
  { path: 'search', component: SearchComponent },
  { path: 'category/:id', component: CategoriesComponent }, 
  { path: 'category/:categoryName', component: CategoriesComponent },
  { path: '**', redirectTo: '' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
