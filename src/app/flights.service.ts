import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flights } from './interface/Flights';

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

	getFor(airport: string): Observable<Flights> {
		const now = new Date();
		
		const day = now.getDate();
		const year = now.getFullYear();
		const currentMonth = now.getMonth()+1;
		const nextMonth = ((now.getMonth()+1)%12)+1;

		let endpointUrl = this.apiUrl
			.replace('%1s', airport)
			.replace('%2s', day+'/'+currentMonth+'/'+year)
			.replace('%3s', day+'/'+nextMonth+'/'+year);
		
		return this.http.get(endpointUrl) as Observable<Flights>;
	}
}
