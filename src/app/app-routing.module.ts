import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { EditCityComponent } from './edit-city/edit-city.component'


const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  {path:'cities', component:CityComponent},
  {path:'citydetails/:id', component:CityDetailsComponent},
  {path:'editcity/:id', component:EditCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
