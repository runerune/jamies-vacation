import { Component, OnInit, Input } from '@angular/core';
import { City } from '../interface/City';
import { WeatherService } from '../weather.service';
import { Weather } from '../interface/Weather';
import { FlightsService } from '../flights.service';
import { FlightsParsed } from '../interface/FlightsParsed';

@Component({
	selector: 'app-place',
	templateUrl: './place.component.html',
	styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
	@Input() city: City;

	weather: Weather;
	flights: FlightsParsed;

	constructor(
		private weatherService: WeatherService,
		private flightService: FlightsService,
	) { }

	ngOnInit(): void {
		console.log(this.city);

		this.weatherService.getFor(this.city.name).subscribe(result => {
			this.weather = result;
		})
		
		this.flightService.getFor(this.city.airportCode).subscribe(result => {
			let totalPrice = 0;
			let totalCount = 0;
			let totalDistance = 0;

			let minPrice = Infinity;
			let maxPrice = -Infinity;

			for(let flight of result.data) {
				let combinedPrice =  flight.price + (flight.bags_price[1] || 0);

				if(combinedPrice > maxPrice) maxPrice = combinedPrice;
				if(combinedPrice < minPrice) minPrice = combinedPrice;

				totalPrice += combinedPrice;
				totalDistance += flight.distance;
				totalCount++;
			}

			this.flights = {
				average: totalPrice/totalCount,
				max: maxPrice,
				min: minPrice,
				unit: totalPrice/totalDistance,
			};

			console.log(this.flights);
		})
	}


}
