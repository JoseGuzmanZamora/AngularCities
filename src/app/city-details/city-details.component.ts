import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CityService } from '../city.service';


@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {

  @Input() city:City;
  edit:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCity();
  }

  getCity(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cityService.getCity(id).subscribe(city => this.city = city);
  }

  goBack(): void{
    this.location.back();
  }

  changeEdit(): void{
    console.log("hola");
    this.edit = !this.edit;
    console.log(this.edit);
  }

}