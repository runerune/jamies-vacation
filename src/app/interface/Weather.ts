export interface Weather {
	main: {
		temp: number,
		temp_max: number,
		temp_min: number,
		pressure: number,
		humidity: number,
		feels_like: number,
	},
	weather: Array<{
		main: string,
		icon: string,
	}>,
	wind: {
		speed: number,
	},
	clouds: {
		all: number,
	}
}