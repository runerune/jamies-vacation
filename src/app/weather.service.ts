import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './interface/Weather';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	apiUrl: string;

	constructor(
		private http: HttpClient,
	) { 
		this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=%s&appid=be4ebdde0ecfbbba104aa4b05fc031f2&units=metric';
	}

	getFor(name: string): Observable<Weather> {
		return this.http.get(this.apiUrl.replace('%s', name)) as Observable<Weather>;
	}
}
