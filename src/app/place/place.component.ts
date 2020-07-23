import { Component, OnInit, Input } from '@angular/core';
import { City } from '../interface/City';
import { WeatherService } from '../weather.service';
import { Weather } from '../interface/Weather';

@Component({
	selector: 'app-place',
	templateUrl: './place.component.html',
	styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
	@Input() city: City;
	weather: Weather;

	constructor(
		private weatherService: WeatherService,
	) { }

	ngOnInit(): void {
		console.log(this.city);

		this.weatherService.getFor(this.city.name).subscribe(result => {
			this.weather = result;
			console.log(this.weather);
		})
	}


}
