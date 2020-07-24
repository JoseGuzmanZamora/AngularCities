import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  edit_url:boolean = false;

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

  showEdit(): void{
    this.edit = !this.edit;
  }

  editUrl(): void{
    this.edit_url = !this.edit_url;
  }

  delete():void {
    this.cityService.deleteCity(this.city.id).subscribe(res =>
      this.goBack()
    );
  }
}