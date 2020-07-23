import { Component, OnInit, Input} from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service'

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {

  @Input() city: City;

  constructor() { }

  ngOnInit(): void {
  }



}
