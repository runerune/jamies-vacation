import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './interface/City';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FlightsService {
	apiUrl: string;

	constructor(
		private http: HttpClient,
	) { 
		this.apiUrl = 'https://api.skypicker.com/flights?fly_from=%1s&date_from=%2s&date_to=%3s&max_fly_duration=6&flight_type=oneway&partner=picky&limit=50&currency=EUR';
	}

	getFor(city: City): Observable<object> {
		const now = new Date();
		
		const day = now.getDate();
		const year = now.getFullYear();
		const currentMonth = now.getMonth()+1;
		const nextMonth = ((now.getMonth()+6)%12)+1;

		let endpointUrl = this.apiUrl
			.replace('%1s', city.name)
			.replace('%2s', day+'/'+currentMonth+'/'+year)
			.replace('%3s', day+'/'+nextMonth+'/'+year);
		
		return this.http.get(endpointUrl);
	}
}
