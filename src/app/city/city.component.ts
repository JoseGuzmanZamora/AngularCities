import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CITIES } from '../mock-cities'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cities = CITIES;

  city:City = {
    Id:1,
    name:"Guatemala City",
    country:"Guatemala",
    description:"Guatemala is a beautiful place",
    img_url:"https://images.unsplash.com/photo-1528543010705-e7e75169b717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    rating:100
  }

  constructor() { }

  ngOnInit(): void {
  }

}
